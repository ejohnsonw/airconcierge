import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../environments/environment';
import {AuthenticationService} from './authentication.service';
import {MessageService} from 'primeng/api';


class Account {
}

@Injectable({
    providedIn: 'root'
})
export class WebserviceService {

    constructor(private http: HttpClient, private authenticationService: AuthenticationService, private messageService: MessageService) {
        this.baseUrl = environment.baseUrl;

    }

    token;
    username;
    baseUrl;
    clientId = 'quos.io';
    private index: number = 0;

    login(user) {

        let body: FormData = new FormData();
        body.append('username', user.username);
        body.append('password', user.password);

        return this.http.post(this.baseUrl + 'login', user);
    }

    me() {
        return this.http.get(this.baseUrl + 'user/me/' + this.authenticationService.authentication['username'], this.prepareHeaders());
    }

    forActivate(publicId) {
        var req = {"publicId": publicId}
        return this.http.post(this.baseUrl + 'user/forActivate', req, this.prepareHeaders());
    }


    hasRole(roleName) {
        let found = false;
        this.token.roles.forEach(function (role) {
                if (role === roleName) {
                    found = true;
                }

            }
        );
        return found;
    }

    prepareHeaders() {
        if (this.authenticationService.authenticated) {
            return {'headers': {'Authorization': 'Bearer ' + this.authenticationService.authentication['access_token']}};
        } else {
            return {'headers': {}};
        }

    }


    logout(user: Account) {
        console.log(user);
        this.authenticationService.logout();
        return this.http.post(this.baseUrl + 'login/auth', user);
    }

    contactUs(contact) {

        return this.http.post(this.baseUrl + 'travelful/contactus', contact);
    }

    register(register) {

        return this.http.post(this.baseUrl + 'travelful/register', register);
    }

    flights(register) {
        return this.http.post(this.baseUrl + 'booking/shopFlight', register);
    }

    book(register) {
        return this.http.post(this.baseUrl + 'booking/book', register, this.prepareHeaders());
    }

    compose(register) {
        return this.http.post(this.baseUrl + 'booking/compose', register);
    }

    retrieveBooking(bookingId) {
        var req = {"bookingId":bookingId}
        return this.http.post(this.baseUrl + 'booking', req, this.prepareHeaders());
    }

    passenger(req) {
        return this.http.post(this.baseUrl + 'booking/passenger', req, this.prepareHeaders());
    }

    airlines(request) {
        return this.http.post(this.baseUrl + 'airline/', request, this.prepareHeaders());
    }

    updateFlight(request) {
        return this.http.post(this.baseUrl + 'airline/updateFlight', request, this.prepareHeaders());
    }

    airportFeed(activate) {
        var req = {"publicId": activate}
        return this.http.post(this.baseUrl + 'airport/feed', activate, this.prepareHeaders());
    }

    airlineFeed(activate) {

        return this.http.post(this.baseUrl + 'airline/feed', activate, this.prepareHeaders());
    }

    airports(activate) {

        return this.http.post(this.baseUrl + 'airport/search', activate, this.prepareHeaders());
    }

    rebookInformation(activate) {
        return this.http.post(this.baseUrl + 'airline/rebookInformation', activate, this.prepareHeaders());
    }

    updateQueue(req) {
        return this.http.post(this.baseUrl + 'airline/removeFromQueue', req, this.prepareHeaders());
    }


    requestPasswordReset(request) {
        this.addExtra(request);
        return this.http.post(this.baseUrl + 'travelful/requestPasswordReset', request);
    }

    resetPassword(request) {
        this.addExtra(request);
        return this.http.post(this.baseUrl + 'travelful/resetPassword', request);
    }

    dashboard() {
        return this.http.post(this.baseUrl + 'travelful/dashboard', {'u': '8s77'}, this.prepareHeaders());
    }


    users(req) {
        return this.http.post(this.baseUrl + 'travelful/users', req, this.prepareHeaders());
    }

    roles() {
        return this.http.post(this.baseUrl + 'travelful/roles', {}, this.prepareHeaders());
    }

    organizationRoles() {
        return this.http.get(this.baseUrl + 'organization/roles', this.prepareHeaders());
    }

    userAccessControl(request) {
        this.addExtra(request);
        return this.http.post(this.baseUrl + 'organization/userAccessControl', request, this.prepareHeaders());
    }

    accountsForLocation(request) {
        this.addExtra(request);
        return this.http.post(this.baseUrl + 'organization/accountsForLocation', request, this.prepareHeaders());
    }


    publishAirlineWebsite(airline) {
        return this.http.post(this.baseUrl + 'airline/publishAirlineWebsite', airline, this.prepareHeaders());
    }


    addExtra(req) {
        req['clientId'] = this.clientId;
    }


    citySearch(criteria) {
        const request = {};
        request['criteria'] = criteria;
        this.addExtra(request);
        return this.http.post(this.baseUrl + 'city/search', request, this.prepareHeaders());
    }

    citiesWithBusiness(criteria) {
        const request = {};
        request['criteria'] = criteria;
        this.addExtra(request);
        return this.http.post(this.baseUrl + 'business/citiesWithBusiness', request, this.prepareHeaders());
    }

    city(id) {
        const request = {};
        this.addExtra(request);
        return this.http.get(this.baseUrl + 'city/' + id, this.prepareHeaders());
    }


    categories(mode) {
        let request = {};
        if (mode) {
            request['forDashboard'] = mode;
        }
        this.addExtra(request);
        return this.http.post(environment.baseUrl + 'business/categories', request, this.prepareHeaders());
    }

    saveBusiness(request) {

        this.addExtra(request);
        return this.http.post(environment.baseUrl + 'business/create', request, this.prepareHeaders());
    }


    saveAd(request) {

        this.addExtra(request);
        return this.http.post(environment.baseUrl + 'advertising/save', request, this.prepareHeaders());
    }

    retrieveAds(request) {
        this.addExtra(request);
        return this.http.post(environment.baseUrl + 'advertising/adsForBusiness', request, this.prepareHeaders());
    }

    openCampaigns(request) {
        this.addExtra(request);
        return this.http.post(environment.baseUrl + 'advertising/openCampaigns', request, this.prepareHeaders());
    }

    campaignsForBusiness(request) {
        this.addExtra(request);
        return this.http.post(environment.baseUrl + 'advertising/campaignsForBusiness', request, this.prepareHeaders());
    }

    types() {
        let request = {};
        this.addExtra(request);
        return this.http.post(environment.baseUrl + 'business/types', request, this.prepareHeaders());
    }

    businessToggleEnabled(biz) {
        let request = {};
        request['publicId'] = biz.publicId;
        request['enabled'] = biz.enabled;
        this.addExtra(request);
        return this.http.post(environment.baseUrl + 'business/toggleEnabled', request, this.prepareHeaders());
    }

    locationToggleEnabled(biz) {
        let request = {};
        request['publicId'] = biz.publicId;
        request['enabled'] = biz.enabled;
        this.addExtra(request);
        return this.http.post(environment.baseUrl + 'business/toggleEnabled', request, this.prepareHeaders());
    }

    businesses(request) {
        this.addExtra(request);
        return this.http.post(environment.baseUrl + 'business/search', request, this.prepareHeaders());
    }

    businessForUser(request) {
        this.addExtra(request);
        return this.http.post(environment.baseUrl + 'business/businessForUser', request, this.prepareHeaders());
    }

    affiliateSearch(request) {
        this.addExtra(request);
        return this.http.post(environment.baseUrl + 'business/affiliateSearch', request, this.prepareHeaders());
    }


    searchCityForVenues(cityId, criteria) {
        const request = {};
        request['typeId'] = 9;
        request['cityId'] = cityId;
        request['criteria'] = criteria;
        this.addExtra(request);
        request['clientId'] = 'quos.io';
        return this.http.post(this.baseUrl + 'city/businessForTypeAndCity', request, this.prepareHeaders());
    }


    venueRetrieve(publicId) {
        const request = {};
        request['locationId'] = publicId;
        this.addExtra(request);
        request['clientId'] = 'quos.io';
        return this.http.post(this.baseUrl + 'business/retrieveLocation', request, this.prepareHeaders());
    }

    searchByVenue(publicId, criteria) {
        const request = {};

        var searchContext = {};
        searchContext['venueId'] = publicId;
        searchContext['query'] = criteria;
        searchContext['searchType'] = 'venueDirectory';
        request['venueId'] = publicId;
        request['query'] = criteria;
        request['searchContext'] = searchContext;
        this.addExtra(request);
        request['clientId'] = 'quos.io';
        return this.http.post(this.baseUrl + 'business/searchByVenue', request, this.prepareHeaders());
    }


    business(request) {
        this.addExtra(request);
        return this.http.post(environment.baseUrl + 'business/retrieve', request, this.prepareHeaders());
    }

    location(publicId) {
        let request = {};
        request['locationId'] = publicId;
        // request['checkForCatalog'] = true;
        request['returnCatalogs'] = true;
        request['all'] = true;
        request['returnStyle'] = true;
        request['retrievePlaylists'] = true;
        request['admin'] = true;
        request['cached'] = true;
        this.addExtra(request);
        return this.http.post(environment.baseUrl + 'business/retrieveLocation', request, this.prepareHeaders());
    }

    groupOrLocation(publicId) {
        let request = {};
        request['uuid'] = publicId;
        // request['checkForCatalog'] = true;
        request['returnCatalogs'] = true;
        request['all'] = true;
        request['returnStyle'] = true;
        request['retrievePlaylists'] = true;
        request['admin'] = true;
        request['cached'] = false;
        this.addExtra(request);
        return this.http.post(environment.baseUrl + 'grouping/groupOrLocation', request, this.prepareHeaders());
    }


    mediaForOwner(ownerId, criteria) {
        let request = {};
        request['ownerId'] = ownerId;
        request['criteria'] = criteria;
        this.addExtra(request);
        return this.http.post(environment.baseUrl + 'media/mediaForOwner', request, this.prepareHeaders());
    }

    createMedia(request) {
        this.addExtra(request);
        return this.http.post(environment.baseUrl + 'media/create', request, this.prepareHeaders());
    }

    uploadMedia(request) {
        this.addExtra(request);
        return this.http.post(environment.baseUrl + 'media/uploadMedia', request, this.prepareHeaders());
    }


    createPlaylist(request) {
        this.addExtra(request);
        return this.http.post(environment.baseUrl + 'media/createPlaylist', request, this.prepareHeaders());
    }


    /* Catalog */

    uploadCatalog(request) {
        this.addExtra(request);
        return this.http.post(environment.baseUrl + 'catalog/uploadCatalog', request, this.prepareHeaders());
    }

    grantCatalogAccess(request) {
        this.addExtra(request);
        return this.http.post(environment.baseUrl + 'catalog/grantCatalogAccess', request, this.prepareHeaders());
    }

    grantAffiliateAccess(request) {
        this.addExtra(request);
        return this.http.post(environment.baseUrl + 'business/grantAffiliateAccess', request, this.prepareHeaders());
    }


    updateProduct(request) {
        this.addExtra(request);
        return this.http.post(this.baseUrl + 'catalog/updateProduct', request, this.prepareHeaders());
    }

    removeProductCategory(request) {
        this.addExtra(request);
        return this.http.post(this.baseUrl + 'catalog/removeProductCategory', request, this.prepareHeaders());
    }

    removeCatalog(request) {
        this.addExtra(request);
        return this.http.post(this.baseUrl + 'catalog/removeCatalog', request, this.prepareHeaders());
    }

    retrieveCatalog(request) {
        this.addExtra(request);
        return this.http.post(this.baseUrl + 'catalog/retrieveCatalog', request, this.prepareHeaders());
    }


    orderingOptions(request) {
        this.addExtra(request);
        return this.http.post(this.baseUrl + 'catalog/orderingOptions', request, this.prepareHeaders());
    }

    productOrderingInfo(request) {
        this.addExtra(request);
        return this.http.post(this.baseUrl + 'catalog/productOrderingInfo', request, this.prepareHeaders());
    }


    createOrderingOptions(request) {
        this.addExtra(request);
        return this.http.post(this.baseUrl + 'catalog/createOrderingOptions', request, this.prepareHeaders());
    }

    removeItemFromOrderingOptions(request) {
        this.addExtra(request);
        return this.http.post(this.baseUrl + 'catalog/removeItemFromOrderingOptions', request, this.prepareHeaders());
    }

    enableDisableCatalog(request) {
        this.addExtra(request);
        return this.http.post(this.baseUrl + 'catalog/enableDisableCatalog', request, this.prepareHeaders());
    }

    deleteProduct(request) {
        this.addExtra(request);
        request['clientId'] = 'quos.io';
        return this.http.post(this.baseUrl + 'catalog/deleteProduct', request, this.prepareHeaders());
    }


    catalogsForBusiness(request) {
        this.addExtra(request);
        return this.http.post(environment.baseUrl + 'catalog/catalogsForBusiness', request, this.prepareHeaders());
    }

    catalogsForLocation(request) {
        this.addExtra(request);
        return this.http.post(environment.baseUrl + 'catalog/catalogsForBusiness', request, this.prepareHeaders());
    }

    affiliatesForLocation(request) {
        this.addExtra(request);
        return this.http.post(environment.baseUrl + 'business/affiliatesForLocation', request, this.prepareHeaders());
    }

    affiliatesForCatalog(request) {
        this.addExtra(request);
        return this.http.post(environment.baseUrl + 'affiliate/affiliatesForCatalog', request, this.prepareHeaders());
    }

    offerAffiliate(request) {
        this.addExtra(request);
        return this.http.post(environment.baseUrl + 'affiliate/offerAffiliate', request, this.prepareHeaders());
    }

    requestAffiliate(request) {
        this.addExtra(request);
        return this.http.post(environment.baseUrl + 'affiliate/requestAffiliate', request, this.prepareHeaders());
    }

    approveAffiliateRequest(request) {
        this.addExtra(request);
        return this.http.post(environment.baseUrl + 'affiliate/approveAffiliateRequest', request, this.prepareHeaders());
    }

    cancelAffiliateRequest(request) {
        this.addExtra(request);
        return this.http.post(environment.baseUrl + 'affiliate/cancelAffiliateRequest', request, this.prepareHeaders());
    }


    eventsForBusiness(publicId) {
        let request = {};
        request['publicId'] = publicId;
        this.addExtra(request);
        return this.http.post(environment.baseUrl + 'business/eventsForBusiness', request, this.prepareHeaders());
    }

    saveServiceInstance(request) {
        this.addExtra(request);
        return this.http.post(environment.baseUrl + 'launcher/saveServiceInstance', request, this.prepareHeaders());
    }


    modules(categories) {
        const request = {};
        request['types'] = categories;
        this.addExtra(request);
        return this.http.post(this.baseUrl + 'launcher/modules', request, this.prepareHeaders());
    }


    instancesByLocation(publicId) {
        var request = {};
        request['locationId'] = publicId;
        this.addExtra(request);
        return this.http.post(environment.baseUrl + 'launcher/instances', request, this.prepareHeaders());
    }

    instancesByBusiness(publicId) {
        var request = {};
        request['businessPublicId'] = publicId;
        this.addExtra(request);
        return this.http.post(environment.baseUrl + 'launcher/instances', request, this.prepareHeaders());
    }

    search(searchText, searchContext) {
        var request = {};
        request["searchContext"] = searchContext;
        request["query"] = searchText;
        this.addExtra(request);
        return this.http.post(environment.baseUrl + 'search', request, this.prepareHeaders());
    }


    qrForData(data) {
        var request = {};
        request['payload'] = data;
        this.addExtra(request);
        return this.http.post(environment.baseUrl + 'business/qrCodeFor', request, this.prepareHeaders());
    }


    loadGroups(criteria, typeId) {
        var request = {};
        request['criteria'] = criteria;
        request['typeId'] = typeId;
        request['frontPage'] = true;
        this.addExtra(request);
        return this.http.post(environment.baseUrl + 'grouping/search', request, this.prepareHeaders());
    }

    featuredChannels(criteria) {
        var request = {};
        request['criteria'] = criteria;
        request['featured'] = true;
        this.addExtra(request);
        return this.http.post(environment.baseUrl + 'broadcasting/channelPojo/search/', request, this.prepareHeaders());
    }

    channelsPublisher(ownerId) {
        var request = {};
        request['ownerId'] = ownerId;
        debugger
        this.addExtra(request);
        return this.http.post(environment.baseUrl + 'broadcasting/channel/search/', request, this.prepareHeaders());
    }

    channelDetail(channelId) {
        return this.http.get(environment.baseUrl + 'broadcasting/channel/' + channelId, this.prepareHeaders());
    }

    loadGroupMembership(memberId) {
        var request = {};
        request['memberId'] = memberId;
        this.addExtra(request);
        return this.http.post(environment.baseUrl + 'grouping/memberships', request, this.prepareHeaders());
    }

    retrieveGroupComposite(groupId) {

        return this.http.get(environment.baseUrl + 'grouping/retrieveGroupComposite/' + groupId, this.prepareHeaders());
    }

    join(request) {
        request['listName'] = "CommuniTV General"
        request['ownerId'] = "communitv"
        return this.http.post(environment.baseUrl + 'communications/joinlist', request, this.prepareHeaders());
    }

    recompose(groupId) {
        // this.addExtra(request);
        return this.http.get(environment.baseUrl + 'grouping/compose/' + groupId, this.prepareHeaders());
    }

    toggleMembership(locationId, groupId, active) {
        var request = {};
        request['memberId'] = locationId;
        request['groupId'] = groupId;
        request['active'] = active;
        this.addExtra(request);
        return this.http.post(environment.baseUrl + 'grouping/toggleMembership', request, this.prepareHeaders());
    }

    retrieveEvent(uuid, retrieveParticipating, retrievePlaylists, cached) {
        return this.http.post(environment.baseUrl + 'event/retrieveEvent', {
            'uuid': uuid,
            'retrieveParticipating': retrieveParticipating,
            'retrieveMedia': retrievePlaylists,
            'cached': cached,
        }, this.prepareHeaders());
    }

    /*  Queues */

    retrieveQueuesForOwner(publicId) {
        var request = {};
        request['locationId'] = publicId;
        this.addExtra(request);
        return this.http.post(environment.baseUrl + 'queue/retrieveQueuesForOwner', request, this.prepareHeaders());
    }

    saveQueue(request) {
        this.addExtra(request);
        return this.http.post(environment.baseUrl + 'queue/save', request, this.prepareHeaders());
    }


    // showToast(position, title, message, status) {
    //   this.index += 1;
    //   this.toastrService.show(message || 'Success', title, {position, status});
    // }

    // showInfo(title, message) {
    //   this.showToast('bottom-right', title, message, 'success');
    // }
    //
    // showError(title, message) {
    //   this.showToast('bottom-right', title, message, 'danger');
    // }


    saveEvent(event) {
        return this.http.post(environment.baseUrl + 'event/saveEvent', event, this.prepareHeaders());
    }

    showInfo(title, message) {
        this.messageService.add({severity: 'info', summary: title, detail: message});
    }

    showError(title, message) {
        this.messageService.add({severity: 'error', summary: title, detail: message});
    }

    retrieveParticipating(uuid, criteria) {
        return this.http.post(environment.baseUrl + 'event/retrieveParticipating', {
            'uuid': uuid,
            'criteria': criteria
        }, this.prepareHeaders());
    }

    locationFromParticipating(event) {
        return this.http.post(environment.baseUrl + 'business/locationFromParticipating', event, this.prepareHeaders());
    }

    eventProfile(event) {
        return this.http.post(environment.baseUrl + 'event/profile', event, this.prepareHeaders());
    }

    profilesEvents(event) {
        return this.http.post(environment.baseUrl + 'event/profilesEvents', event, this.prepareHeaders());
    }

    addParticipating(data) {
        return this.http.post(environment.baseUrl + 'event/addParticipating', data
            , this.prepareHeaders());
    }

    removeParticipating(data) {
        return this.http.post(environment.baseUrl + 'event/removeParticipating', data
            , this.prepareHeaders());
    }

    retrieveLocation(publicId) {
        const request = {};
        request['locationId'] = publicId;
        this.addExtra(request);
        return this.http.post(this.baseUrl + 'business/retrieveLocation', request, this.prepareHeaders());
    }

    saveProfile(formData: FormData) {

    }

    checkins(uuid) {
        var request = {};
        request['uuid'] = uuid;
        this.addExtra(request);
        return this.http.post(environment.baseUrl + 'event/checkins', request, this.prepareHeaders());
    }

    verifyProfile(profileId, verificationCode) {
        // this.addExtra(request);
        return this.http.get(environment.baseUrl + "event/profile/verify/" + profileId + "/" + verificationCode, this.prepareHeaders());
    }

    track(gtmTag) {
        return this.http.post(environment.baseUrl + 'track', gtmTag, this.prepareHeaders());
    }

    retrieveShare(uuid: any) {
        var req = {"uuid": uuid}
        return this.http.post(environment.baseUrl + 'media/retrieveShare', req, this.prepareHeaders());
    }
}
