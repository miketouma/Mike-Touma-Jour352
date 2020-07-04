(function() { function bxBootstrap() {
	if (!(window.bouncex&&bouncex.website)) {
		var pushedData = [];
		if(window.bouncex && bouncex.push && bouncex.length){
			pushedData = bouncex;
		}
		window.bouncex = {};
		bouncex.pushedData = pushedData;
		bouncex.website = {"id":4014,"name":"Maven | Plant Based News","cookie_name":"bounceClientVisit4014","domain":"plantbasednews.org","ct":"bind_to_domain","ally":0,"ei":0,"tcjs":"","cjs":"","force_https":false,"waypoints":false,"content_width":900,"gai":"","swids":"","sd":0,"ljq":"auto","campaign_id":0,"is_preview":false,"aco":{"first_party_limit":"3500","local_storage":"1"},"cmp":{"gdpr":0,"gmp":0,"whitelist_check":0},"burls":[],"ple":false,"fbe":true,"mas":2,"map":1,"gar":true,"ete":2,"ettm":true,"etjs":"","dge":false,"bxidLoadFirst":false,"gbi_enabled":1,"gbi":{"rblocks":null},"bpush":false,"pt":{"article":{"testmode":false,"val":[[{"activation":"js","prop":"","prop2":"","prop3":"","val":"document.querySelectorAll('[name=\"pagetype\"][content=\"article\"], [name=\"pagetype\"][content=\"recipe\"]').length > 0;"}]]},"category":{"testmode":false,"val":[[{"activation":"js","prop":"","prop2":"","prop3":"","val":"document.querySelectorAll('[name=\"pagetype\"][content=\"rich_term\"]').length > 0;"}]]},"home":{"testmode":false,"val":[[{"activation":"js","prop":"","prop2":"","prop3":"","val":"document.querySelectorAll('[name=\"pagetype\"][content=\"hub_page\"]').length > 0;"}]]},"search":{"testmode":false,"val":[[{"activation":"current_page_url","prop":"contains","prop2":"","prop3":"","val":"/search"}]]}},"els":{"Endcap":"section.m-flex-grid:last, section.m-list-hub, section.m-comments","Infeed":".m-detail--body p + p","Masthead":"section.m-page-container"},"vars":[{"name":"page_type","polling":"none","persist":"no","page_types":[],"testmode":false,"default":"false","code":"bouncex.website.pts;","trigger":"pageload"},{"name":"video_visible","polling":"all","persist":"no","page_types":[],"testmode":false,"default":"false","code":"jQuery('.m-video, .m-video-player').length > 0;","trigger":"pageload"}],"dgu":"pixel.cdnwidget.com","dgp":false,"ba":{"enabled":0,"fbte":0},"biu":"assets.bounceexchange.com","bau":"api.bounceexchange.com","beu":"events.bouncex.net","ibx":{"tjs":"","cjs":"","miw":1,"mibcx":1,"te":0,"cart_rep":{"get":"","set":""},"ulpj":null,"cus":"","miw_exclude":""},"etjson":null,"osre":true,"osru":"osr.bounceexchange.com/v1/osr/items","checkDfp":false,"spa":0,"spatm":1,"preinit_cjs":"","cpnu":"coupons.bounceexchange.com"}
;
		bouncex.tag = 'tag3';
		bouncex.$ = window.jQuery;
		bouncex.env = 'production';
		bouncex.restrictedTlds = {"casl":{"ca":1},"gdpr":{"ad":1,"al":1,"at":1,"ax":1,"ba":1,"be":1,"bg":1,"by":1,"xn--90ais":1,"ch":1,"cy":1,"cz":1,"de":1,"dk":1,"ee":1,"es":1,"eu":1,"fi":1,"fo":1,"fr":1,"uk":1,"gb":1,"gg":1,"gi":1,"gr":1,"hr":1,"hu":1,"ie":1,"im":1,"is":1,"it":1,"je":1,"li":1,"lt":1,"lu":1,"lv":1,"mc":1,"md":1,"me":1,"mk":1,"xn--d1al":1,"mt":1,"nl":1,"no":1,"pl":1,"pt":1,"ro":1,"rs":1,"xn--90a3ac":1,"ru":1,"su":1,"xn--p1ai":1,"se":1,"si":1,"sj":1,"sk":1,"sm":1,"ua":1,"xn--j1amh":1,"va":1,"tr":1}};
		bouncex.push = function(pushData) {
			bouncex.pushedData.push(pushData);
		}
		var script = document.createElement('script');
		script.setAttribute('src', '//assets.bounceexchange.com/assets/smart-tag/versioned/ijs_all_modules_c115760a5f87cf5401fb8ca40e9339d2.js');

		document.body.appendChild(script);
	}
}
if (document.readyState === "loading") {
	document.addEventListener("DOMContentLoaded", bxBootstrap);
} else {
	bxBootstrap();
}})();