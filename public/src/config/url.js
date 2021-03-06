const devApiUrl = 'http://localhost:8081';//本地开发环境
const buildDevApiUrl = 'http://192.168.48.192:9088';//打包开发环境
const buildDevTestApiUrl = 'http://192.168.48.192:9288';//打包开发测试环境
const buildTestApiUrl = 'http://192.168.48.192:9188';//打包测试环境
const buildReleaseApiUrl = 'http://localhost:8081';//打包预发布环境
const buildProApiUrl = 'http://localhost:8081';//打包正式环境


let useApiUrl,
    nodeEnv = process.env.NODE_ENV,
    appMode = process.env.REACT_APP_MODE;

if('development' === nodeEnv){
    useApiUrl = devApiUrl;
}

if('production' === nodeEnv){
    switch (appMode) {
        case 'buildDev':
            useApiUrl = buildDevApiUrl;
            break;
        case 'buildDevTest':
            useApiUrl = buildDevTestApiUrl;
            break;
        case 'buildTest':
            useApiUrl = buildTestApiUrl;
            break;
        case 'release':
            useApiUrl = buildReleaseApiUrl;
            break;
        default:
            useApiUrl = buildProApiUrl;
            break;
    }
}

if(typeof process.env.REACT_APP_API_URL === 'string'){
    useApiUrl = process.env.REACT_APP_API_URL
}

if(useApiUrl.slice(0,4) !== 'http'){
    useApiUrl = window.location.origin + useApiUrl
}

export default useApiUrl;
