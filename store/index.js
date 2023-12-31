export const state = () => ({
    sidebar: true,
    authenticated: false,
    token: "",
    user: null,
    email: "",
})

export const mutations = {
    toggleSidenav(state) {
        // state.sidebar = !state.sidebar
    },
    async userLoggedIn(state) {
        state.authenticated = true;

        const locationInfo = await fetch('https://ipapi.co/json').then(function(response) {
            return response.json();
        }).then(function(data) {
            return data;
        });
        const location = locationInfo?.city + ", " + locationInfo?.country;
        const timezone = locationInfo?.timezone;
        const ip = locationInfo?.ip;
        let os = navigator.userAgent.slice(13).split(';')
        os = os[0];
        let nAgt = navigator.userAgent;
        let browserName = navigator.appName;
        let fullVersion = '' + parseFloat(navigator.appVersion);
        let majorVersion = parseInt(navigator.appVersion, 10);
        let nameOffset, verOffset, ix;

        // In Opera, the true version is after "OPR" or after "Version"
        if ((verOffset = nAgt.indexOf("OPR")) != -1) {
            browserName = "Opera";
            fullVersion = nAgt.substring(verOffset + 4);
            if ((verOffset = nAgt.indexOf("Version")) != -1)
                fullVersion = nAgt.substring(verOffset + 8);
        }
        // In MS Edge, the true version is after "Edg" in userAgent
        else if ((verOffset = nAgt.indexOf("Edg")) != -1) {
            browserName = "Microsoft Edge";
            fullVersion = nAgt.substring(verOffset + 4);
        }
        // In MSIE, the true version is after "MSIE" in userAgent
        else if ((verOffset = nAgt.indexOf("MSIE")) != -1) {
            browserName = "Microsoft Internet Explorer";
            fullVersion = nAgt.substring(verOffset + 5);
        }
        // In Chrome, the true version is after "Chrome" 
        else if ((verOffset = nAgt.indexOf("Chrome")) != -1) {
            browserName = "Chrome";
            fullVersion = nAgt.substring(verOffset + 7);
        }
        // In Safari, the true version is after "Safari" or after "Version" 
        else if ((verOffset = nAgt.indexOf("Safari")) != -1) {
            browserName = "Safari";
            fullVersion = nAgt.substring(verOffset + 7);
            if ((verOffset = nAgt.indexOf("Version")) != -1)
                fullVersion = nAgt.substring(verOffset + 8);
        }
        // In Firefox, the true version is after "Firefox" 
        else if ((verOffset = nAgt.indexOf("Firefox")) != -1) {
            browserName = "Firefox";
            fullVersion = nAgt.substring(verOffset + 8);
        }
        // In most other browsers, "name/version" is at the end of userAgent 
        else if ((nameOffset = nAgt.lastIndexOf(' ') + 1) <
            (verOffset = nAgt.lastIndexOf('/'))) {
            browserName = nAgt.substring(nameOffset, verOffset);
            fullVersion = nAgt.substring(verOffset + 1);
            if (browserName.toLowerCase() == browserName.toUpperCase()) {
                browserName = navigator.appName;
            }
        }
        // trim the fullVersion string at semicolon/space if present
        if ((ix = fullVersion.indexOf(";")) != -1)
            fullVersion = fullVersion.substring(0, ix);
        if ((ix = fullVersion.indexOf(" ")) != -1)
            fullVersion = fullVersion.substring(0, ix);

        majorVersion = parseInt('' + fullVersion, 10);
        if (isNaN(majorVersion)) {
            fullVersion = '' + parseFloat(navigator.appVersion);
            majorVersion = parseInt(navigator.appVersion, 10);
        }
        const sdata = {
            uid: state.user.id,
            ip, 
            os: os.trim(), 
            browser: browserName,
            browser_ver: fullVersion,
            timezone,
            location
        }
        this.$axios.$post('account/logs', sdata)
            .then((res)=>{
                console.log(res);
            })
    },
    userLoggedOut(state) {
        state.authenticated = false
    },
    mutateToken: function (state) {
        state.token = JSON.parse(window.localStorage.getItem("token"));
    },
    mutateUser: function (state) {
        state.user = JSON.parse(window.localStorage.getItem("user"))
    },
    saveEmailForVerify(state, email) {
        state.email = email
    }
}
