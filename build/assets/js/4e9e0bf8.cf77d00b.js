"use strict";(self.webpackChunkdf_docs=self.webpackChunkdf_docs||[]).push([[1877],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>f});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),u=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=u(a),m=r,f=c["".concat(s,".").concat(m)]||c[m]||d[m]||i;return a?n.createElement(f,l(l({ref:t},p),{},{components:a})):n.createElement(f,l({ref:t},p))}));function f(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[c]="string"==typeof e?e:r,l[1]=o;for(var u=2;u<i;u++)l[u]=a[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},2792:(e,t,a)=>{a.r(t),a.d(t,{contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var n=a(7462),r=(a(7294),a(3905));const i={sidebar_position:2},l="Linux Installation",o={unversionedId:"Installing DreamFactory/linux-installation",id:"Installing DreamFactory/linux-installation",isDocsHomePage:!1,title:"Linux Installation",description:"This page will have linux install stuff on it.",source:"@site/docs/Installing DreamFactory/linux-installation.md",sourceDirName:"Installing DreamFactory",slug:"/Installing DreamFactory/linux-installation",permalink:"/Installing DreamFactory/linux-installation",editUrl:"https://github.com/dreamfactorysoftware/df-docs/docs/Installing DreamFactory/linux-installation.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Installing DreamFactory",permalink:"/Installing DreamFactory/installation"},next:{title:"Docker Installation",permalink:"/Installing DreamFactory/docker-installation"}},s=[{value:"Supported Operating Systems",id:"supported-operating-systems",children:[]},{value:"Automated installer",id:"automated-installer",children:[]},{value:"Using the installer",id:"using-the-installer",children:[]},{value:"About The System Database",id:"about-the-system-database",children:[{value:"Supported System Databases",id:"supported-system-databases",children:[]}]}],u={toc:s},p="wrapper";function c(e){let{components:t,...a}=e;return(0,r.kt)(p,(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"linux-installation"},"Linux Installation"),(0,r.kt)("p",null,"This page will have linux install stuff on it. "),(0,r.kt)("h2",{id:"supported-operating-systems"},"Supported Operating Systems"),(0,r.kt)("p",null,"At the time of writing DreamFactory is supported on the following flavors of Linux:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"CentOS 7"),(0,r.kt)("li",{parentName:"ul"},"RHEL 7/8"),(0,r.kt)("li",{parentName:"ul"},"Oracle Linux 7/8"),(0,r.kt)("li",{parentName:"ul"},"Debian 10/11"),(0,r.kt)("li",{parentName:"ul"},"Fedora 36/37"),(0,r.kt)("li",{parentName:"ul"},"Ubuntu 20/22")),(0,r.kt)("h2",{id:"automated-installer"},"Automated installer"),(0,r.kt)("p",null,"DreamFactory has an automated installer to make Linux installs a breeze. The installer can be found in our Github repo ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/dreamfactorysoftware/dreamfactory/tree/master/installers"},"here")),(0,r.kt)("p",null,"To get the installation script locally, you can run:"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"wget https://github.com/dreamfactorysoftware/dreamfactory/raw/master/installers/dfsetup.run")),(0,r.kt)("p",null,"Then, ensure the installer is executeable: "),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"chmod +x dfsetup.run")),(0,r.kt)("p",null,"Run the installer:"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"sudo ./dfsetup.run")),(0,r.kt)("h2",{id:"using-the-installer"},"Using the installer"),(0,r.kt)("p",null,"Once the installer has started, you'll be greeted by an interactive menu. The most typical installation will use options 0, 5, and 7 for a default installation of the latest version of DreamFactory with NGINX as a web server, installing and configuring MariaDB as the system database, and providing a debug log in the ",(0,r.kt)("inlineCode",{parentName:"p"},"/tmp/")," directory. "),(0,r.kt)("p",null,"The rest of the installer's process will provide prompts for things like the location of commercial license files, database settings, and initial admin user information. Once these prompts are complete and the installer exits, you should see the DreamFactory UI on port 80 on the server when accessed via web browser. "),(0,r.kt)("h2",{id:"about-the-system-database"},"About The System Database"),(0,r.kt)("p",null,"During the installation, you will point DreamFactory's installation to a system database. This database will hold the entire configuration for your DreamFactory instance and can be used to replicate, restore, or upgrade an instance in the future. While the default configuration above will set up a system database on localhost, many users, especially those at scale, will want the system database to be hosted elsewhere. This configuration can be (re)entered by running the following command from the ",(0,r.kt)("inlineCode",{parentName:"p"},"/opt/dreamfactory/")," directory:"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"php artisan df:env")),(0,r.kt)("p",null,"The configuration can also be changed manually by editing ",(0,r.kt)("inlineCode",{parentName:"p"},"/opt/dreamfactory/.env"),". For more information, refer to our ",(0,r.kt)("a",{parentName:"p",href:"../DreamFactory%20Configuration/configuration"},"DreamFactory Basic Configuration")," documentation."),(0,r.kt)("h3",{id:"supported-system-databases"},"Supported System Databases"),(0,r.kt)("p",null,"Currently, the supported system database types are:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Sqlite"),(0,r.kt)("li",{parentName:"ul"},"MySQL (MariaDB)"),(0,r.kt)("li",{parentName:"ul"},"Postgres"),(0,r.kt)("li",{parentName:"ul"},"SQL Server")))}c.isMDXComponent=!0}}]);