(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{"2wQf":function(o,a){a.read=function(o,a,t,w,h){var p,r,M=8*h-w-1,n=(1<<M)-1,f=n>>1,i=-7,e=t?h-1:0,s=t?-1:1,N=o[a+e];for(e+=s,p=N&(1<<-i)-1,N>>=-i,i+=M;i>0;p=256*p+o[a+e],e+=s,i-=8);for(r=p&(1<<-i)-1,p>>=-i,i+=w;i>0;r=256*r+o[a+e],e+=s,i-=8);if(0===p)p=1-f;else{if(p===n)return r?NaN:1/0*(N?-1:1);r+=Math.pow(2,w),p-=f}return(N?-1:1)*r*Math.pow(2,p-w)},a.write=function(o,a,t,w,h,p){var r,M,n,f=8*p-h-1,i=(1<<f)-1,e=i>>1,s=23===h?Math.pow(2,-24)-Math.pow(2,-77):0,N=w?0:p-1,u=w?1:-1,c=a<0||0===a&&1/a<0?1:0;for(a=Math.abs(a),isNaN(a)||a===1/0?(M=isNaN(a)?1:0,r=i):(r=Math.floor(Math.log(a)/Math.LN2),a*(n=Math.pow(2,-r))<1&&(r--,n*=2),(a+=r+e>=1?s/n:s*Math.pow(2,1-e))*n>=2&&(r++,n/=2),r+e>=i?(M=0,r=i):r+e>=1?(M=(a*n-1)*Math.pow(2,h),r+=e):(M=a*Math.pow(2,e-1)*Math.pow(2,h),r=0));h>=8;o[t+N]=255&M,N+=u,M/=256,h-=8);for(r=r<<h|M,f+=h;f>0;o[t+N]=255&r,N+=u,r/=256,f-=8);o[t+N-u]|=128*c}}}]);
//# sourceMappingURL=bundle.npm.ieee754.bcb31fa163488d5acfb0.js.map