import {AfterViewInit, Component, Inject, NgZone, OnInit, PLATFORM_ID} from '@angular/core';
import {LayoutService} from "../../layout/service/app.layout.service";
import {ActivatedRoute, Router} from "@angular/router";
import {WebserviceService} from "../../webservice.service";
import * as am5 from '@amcharts/amcharts5';
import * as am5map from '@amcharts/amcharts5/map';
import am5themes_Animated from '@amcharts/amcharts5/themes/Animated';
import {isPlatformBrowser} from "@angular/common";
import map from "@amcharts/amcharts5-geodata/worldLow";

@Component({
    selector: 'app-booking',
    templateUrl: './booking.component.html',
    styleUrls: ['./booking.component.scss']
})
export class BookingComponent implements OnInit, AfterViewInit {
    constructor(@Inject(PLATFORM_ID) private platformId: Object, private zone: NgZone, public layoutService: LayoutService, private router: Router, private webservice: WebserviceService, private route: ActivatedRoute) {

    }

    booking: any
    private root!: am5.Root;
    selectedSegment: any;

    browserOnly(f: () => void) {
        if (isPlatformBrowser(this.platformId)) {
            this.zone.runOutsideAngular(() => {
                f();
            });
        }
    }

    ngOnInit(): void {
        // this.route.params.subscribe(params => {
        //     if (params['bookingId'] != undefined) {
        //
        //     }
        // })
        this.booking = JSON.parse(sessionStorage.getItem("booking"))
        this.load()
    }

    load() {
        // Chart code goes in here
        this.browserOnly(() => {
            var root = am5.Root.new("chartdiv");


// Set themes
// https://www.amcharts.com/docs/v5/concepts/themes/
            root.setThemes([
                am5themes_Animated.new(root)
            ]);


// Create the map chart
// https://www.amcharts.com/docs/v5/charts/map-chart/
            var chart = root.container.children.push(am5map.MapChart.new(root, {
                panX: "translateX",
                panY: "translateY",
                projection: am5map.geoMercator()
            }));

            var cont = chart.children.push(am5.Container.new(root, {
                layout: root.horizontalLayout,
                x: 20,
                y: 40
            }));


// Add labels and controls
            cont.children.push(am5.Label.new(root, {
                centerY: am5.p50,
                text: "Map"
            }));

            var switchButton = cont.children.push(am5.Button.new(root, {
                themeTags: ["switch"],
                centerY: am5.p50,
                icon: am5.Circle.new(root, {
                    themeTags: ["icon"]
                })
            }));

            switchButton.on("active", function () {
                if (!switchButton.get("active")) {
                    chart.set("projection", am5map.geoMercator());
                    chart.set("panX", "translateX");
                    chart.set("panY", "translateY");
                } else {
                    chart.set("projection", am5map.geoOrthographic());
                    chart.set("panX", "rotateX");
                    chart.set("panY", "rotateY");
                }
            });

            cont.children.push(am5.Label.new(root, {
                centerY: am5.p50,
                text: "Globe"
            }));

// Create main polygon series for countries
// https://www.amcharts.com/docs/v5/charts/map-chart/map-polygon-series/
            var polygonSeries = chart.series.push(am5map.MapPolygonSeries.new(root, {
                geoJSON: map
            }));

            var graticuleSeries = chart.series.push(am5map.GraticuleSeries.new(root, {}));
            graticuleSeries.mapLines.template.setAll({
                stroke: root.interfaceColors.get("alternativeBackground"),
                strokeOpacity: 0.08
            });

// Create line series for trajectory lines
// https://www.amcharts.com/docs/v5/charts/map-chart/map-line-series/
            var lineSeries = chart.series.push(am5map.MapLineSeries.new(root, {}));
            lineSeries.mapLines.template.setAll({
                stroke: root.interfaceColors.get("alternativeBackground"),
                strokeOpacity: 0.6
            });

// destination series
            var citySeries = chart.series.push(
                am5map.MapPointSeries.new(root, {})
            );

            citySeries.bullets.push(function () {
                var circle = am5.Circle.new(root, {
                    radius: 5,
                    tooltipText: "{title}",
                    tooltipY: 0,
                    fill: am5.color(0xffba00),
                    stroke: root.interfaceColors.get("background"),
                    strokeWidth: 2
                });

                return am5.Bullet.new(root, {
                    sprite: circle
                });
            });


            var arrowSeries = chart.series.push(
                am5map.MapPointSeries.new(root, {})
            );

            arrowSeries.bullets.push(function () {
                var arrow = am5.Graphics.new(root, {
                    fill: am5.color(0x000000),
                    stroke: am5.color(0x000000),
                    draw: function (display) {
                        display.moveTo(0, -3);
                        display.lineTo(8, 0);
                        display.lineTo(0, 3);
                        display.lineTo(0, -3);
                    }
                });

                return am5.Bullet.new(root, {
                    sprite: arrow
                });
            });

            var lookAt
            var airports = []
            for (let i = 0; i < this.booking['offer']['airports'].length; i++) {
                var ap = this.booking['offer']['airports'][i]
                var ap1 = {
                    id: ap['iata_code'],
                    title: ap['name'] + "(" + ap['iata_code'] + ")",
                    geometry: {type: "Point", coordinates: [ap['longitude'], ap['latitude']]}
                }
                if (i == 0) {
                    lookAt = [ap['longitude'], ap['latitude']]
                }
                airports.push(ap1)
            }
            citySeries.data.setAll(airports);

            var aps = []
            for (let i = 0; i < this.booking['offer']['trips'].length; i++) {
                var trip = this.booking['offer']['trips'][i]
                for (let j = 0; j < trip['segments'].length; j++) {
                    var s = trip['segments'][j]
                    // if(!this.selectedSegment){
                    //     if( s['status'] == "DELAYED" || s['status'] == "CANCELLED"){
                    //         this.segmentSelect(s)
                    //     }
                    // }

                    var lineDataItem = lineSeries.pushDataItem({
                        geometry: {
                            type: "LineString",
                            coordinates: [[s['DepartureAirport']['longitude'], s['DepartureAirport']['latitude']], [s['ArrivalAirport']['longitude'], s['ArrivalAirport']['latitude']]]
                        }
                    });
                    arrowSeries.pushDataItem({
                        lineDataItem: lineDataItem,
                        positionOnLine: 0.5,
                        autoRotate: true
                    });
                }
            }


            polygonSeries.events.on("datavalidated", function () {
                chart.zoomToGeoPoint({longitude: lookAt[0], latitude: lookAt[1]}, 6);
            })


// Make stuff animate on load
            chart.appear(1000, 100);
        });
    }

    ngOnDestroy() {
        // Clean up chart when the component is removed
        this.browserOnly(() => {
            if (this.root) {
                this.root.dispose();
            }
        });
    }


    segmentSelect(s){
        this.selectedSegment = s
    }
    ngAfterViewInit(): void {
    }

    flightSelect(f) {

    }

    airportSelect(a) {

    }

    compose(b: any) {

    }

    bookingData($event: any) {
        this.booking = $event
    }
}
