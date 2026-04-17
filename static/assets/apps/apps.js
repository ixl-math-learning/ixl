const LocalGameEncoder = {
    createEncodedLink: function(path) {
        return path;
    }
};

function makeScramjetLink(url) {
    return '__SCRAMJET__' + url;
}
const appsData = [
{
    title: "Netflix",
    imgSrc: "/img/appimg/netflix.png",
    link: __uv$config.prefix + __uv$config.encodeUrl("https://netflix.com")
},
{
    title: "Discord",
    imgSrc: "https://lh7-rt.googleusercontent.com/formsz/AN7BsVCmw9b3nbc72RqnA_xdfVdcQ8UIh49pSgro1M_eiWiX7wLcELqeyHJ4sxHdnrsBMqb6Yj8a4UQs8DB6tKVu_c_3iz_Y0w7Aj4BfmQ8a2y-zNQoBNplo1IOOWCPsAF1COVTZRGyPcmrBYOEdspxASR-F6gP8iwD_beBe?key=yj4V8pHW144VjA9YlEbf1Q",
    link: makeScramjetLink("https://discord.com/")
},
{
    title: "Cool Math Games",
    imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwROf_FVSh9WkFeG15X-kVysnKddaMHvxSEA&s",
    link: __uv$config.prefix + __uv$config.encodeUrl("https://www.coolmathgames.com")
},
{
    title: "Snapchat",
    imgSrc: "https://lh7-rt.googleusercontent.com/formsz/AN7BsVBrjewnqRLaKcwkXMzZCgHidzjbhAR9NJzeMcoLGfhP3--oCpGIbSMrtbVaGmpbBvW8-l64CAafvM2oEh_e08VmhFmfLQGD5HOJbaDJd-SwWVnnkE0Cet8ByuMSMp3d-391AVxajBSo8pvhrFwXP38-ooMXDa6G2Fke2w?key=yj4V8pHW144VjA9YlEbf1Q",
    link: __uv$config.prefix + __uv$config.encodeUrl("https://www.snapchat.com")
},
{
    title: "Tiktok",
    imgSrc: "https://lh7-rt.googleusercontent.com/formsz/AN7BsVBds4fscsgP0XEKkOjXVjrQnPDVFgRPv0xrx9cwgZNmrh-byXt8OFYojTb2rfhWRf4Pvga2J734KFrWimkbCkAnc3M6wQX2bFiiQFjbjm3b43VlBpGX4UscG63ajjrw1EgiIqXp6DE47uulnDTmQTOArabFK5u9lu9Brg?key=yj4V8pHW144VjA9YlEbf1Q",
    link: makeScramjetLink("https://www.tiktok.com")
},
{
    title: "Void GPT V5",
    imgSrc: "https://lh7-rt.googleusercontent.com/formsz/AN7BsVBSLDvsMXtXzt_FoplKsecNbneQ6HiGpVgdkLWov3f9N_iI2jlkRVQcEGCxJDKpkfscgrCej6ArLfWG_N-DtVtvCQ17S12CFqFK5c9jmSkvIDLJCVPNlFlp7qAebOqlXshA_8In8Dp-x7IiYUZ52epaqkyjmTdmw35WUQ?key=yj4V8pHW144VjA9YlEbf1Q",
    link: makeScramjetLink("https://voidgpt.xyz")
},
{
    title: "Youtube",
    imgSrc: "https://lh7-rt.googleusercontent.com/formsz/AN7BsVAVsyi008sJFs4LOSvMHJayo3CBUBkKGqs697D7L7vRCMG6wt-rpRvns1ztKOAuhLHqQ7xZLcbdpUQU_Fw4CHrno_HihNVr4wgbHBLT-aGtj4ZaXj5j8zFQbSDqdYChGzG8y364k_Ntr-Y7Hl2ZAMHHMeZB-uG0JTjf?key=yj4V8pHW144VjA9YlEbf1Q",
    link: __uv$config.prefix + __uv$config.encodeUrl("https://www.youtube.com")
},
{
    title: "Free Movies",
    imgSrc: "https://lh7-rt.googleusercontent.com/formsz/AN7BsVCoopktIChJuTOaDURXoUzblkK-Xq2NMtd3M3MofCkdPvsS7zlWh0vV3bi389b--H2fNEegFBBsrHCXGqpwrZIPsvZpECpHK8_fEcSdo-uGLszdhIBM3W0uboBJBUWHxhiaGiqWaYLJy4rH-616iI-k9XNlTff9zasYkQ?key=yj4V8pHW144VjA9YlEbf1Q",
    link: makeScramjetLink("https://watch.spencerdevs.xyz")
},
{
    title: "Xbox Cloud Gaming",
    imgSrc: "https://lh7-rt.googleusercontent.com/formsz/AN7BsVB3zlo3v2bBywoSRzbYiHA28Z4paxsZ3M1e71tq3DY8cHBxZv94t1WUnVJqzH1-XFZDacQIFyFj_nbeLEtV7bHuuukSMPIqScWEr5JszXc8eGPj9VIPn9ZOZca47NWUZ7Yk_P9aKPZe80uy6iH4q4umpP8JpoEgaDpV?key=yj4V8pHW144VjA9YlEbf1Q",
    link: makeScramjetLink("https://www.xbox.com/en-us/play")
},
{
    title: "YouTube Music",
    imgSrc: "/img/appimg/ytmusic.svg",
    link: __uv$config.prefix + __uv$config.encodeUrl("https://music.youtube.com")
},
{
    title: "SoundCloud",
    imgSrc: "https://lh7-rt.googleusercontent.com/formsz/AN7BsVAc_DlqeQBvxRvsKD5JwueJZwENO9nrnhtX_mbS3YQyZxzzrVY-l9ThcJoV1a77Pdub4rpfq898eQ05evrTvMNnqTJOJZrJiLRWrEDTdxP5odoU2w26T32kjxZrWn4mhnS_qDVu5FujwdiKBT_R2-k3cvEkkoPEEBhX?key=yj4V8pHW144VjA9YlEbf1Q",
    link: __uv$config.prefix + __uv$config.encodeUrl("https://soundcloud.com/discover")
},
{
    title: "Emulator",
    imgSrc: "/img/appimg/emulator.svg",
    link: "/emulator.html"
},
{
    title: "VN Code Edit",
    imgSrc: "/img/appimg/vn-code-edit.svg",
    link: "/code-editor.html"
},
{
    title: "Blooket Bot",
    imgSrc: "/img/appimg/blooketbot.svg",
    link: "/blooketbot.html"
},
];

export { appsData };
