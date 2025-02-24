// Make the object immutable beyond this point
const toMap = Object.freeze([
  [
    "chemical/x-cdx",
    {
      source: "apache",
      extensions: ["cdx"],
    },
  ],
  [
    "chemical/x-cif",
    {
      source: "apache",
      extensions: ["cif"],
    },
  ],
  [
    "chemical/x-cmdf",
    {
      source: "apache",
      extensions: ["cmdf"],
    },
  ],
  [
    "chemical/x-cml",
    {
      source: "apache",
      extensions: ["cml"],
    },
  ],
  [
    "chemical/x-csml",
    {
      source: "apache",
      extensions: ["csml"],
    },
  ],
  [
    "chemical/x-xyz",
    {
      source: "apache",
      extensions: ["xyz"],
    },
  ],
  [
    "font/collection",
    {
      source: "iana",
      extensions: ["ttc"],
    },
  ],
  [
    "font/otf",
    {
      source: "iana",
      extensions: ["otf"],
    },
  ],
  [
    "font/ttf",
    {
      source: "iana",
      extensions: ["ttf"],
    },
  ],
  [
    "font/woff",
    {
      source: "iana",
      extensions: ["woff"],
    },
  ],
  [
    "font/woff2",
    {
      source: "iana",
      extensions: ["woff2"],
    },
  ],
  [
    "message/disposition-notification",
    {
      source: "iana",
      extensions: ["disposition-notification"],
    },
  ],
  [
    "message/global",
    {
      source: "iana",
      extensions: ["u8msg"],
    },
  ],
  [
    "message/global-delivery-status",
    {
      source: "iana",
      extensions: ["u8dsn"],
    },
  ],
  [
    "message/global-disposition-notification",
    {
      source: "iana",
      extensions: ["u8mdn"],
    },
  ],
  [
    "message/global-headers",
    {
      source: "iana",
      extensions: ["u8hdr"],
    },
  ],
  [
    "message/rfc822",
    {
      source: "iana",
      extensions: ["eml", "mime"],
    },
  ],
  [
    "message/vnd.wfa.wsc",
    {
      source: "iana",
      extensions: ["wsc"],
    },
  ],
  [
    "model/3mf",
    {
      source: "iana",
      extensions: ["3mf"],
    },
  ],
  [
    "model/gltf+json",
    {
      source: "iana",
      extensions: ["gltf"],
    },
  ],
  [
    "model/gltf-binary",
    {
      source: "iana",
      extensions: ["glb"],
    },
  ],
  [
    "model/iges",
    {
      source: "iana",
      extensions: ["igs", "iges"],
    },
  ],
  [
    "model/mesh",
    {
      source: "iana",
      extensions: ["msh", "mesh", "silo"],
    },
  ],
  [
    "model/mtl",
    {
      source: "iana",
      extensions: ["mtl"],
    },
  ],
  [
    "model/obj",
    {
      source: "iana",
      extensions: ["obj"],
    },
  ],
  [
    "model/step",
    {
      source: "iana",
      extensions: [".p21", ".stp", ".step", ".stpnc", ".210"],
    },
  ],
  [
    "model/step+xml",
    {
      source: "iana",
      extensions: ["stpx"],
    },
  ],
  [
    "model/step+zip",
    {
      source: "iana",
      extensions: ["stpz"],
    },
  ],
  [
    "model/step-xml+zip",
    {
      source: "iana",
      extensions: ["stpxz"],
    },
  ],
  [
    "model/stl",
    {
      source: "iana",
      extensions: ["stl"],
    },
  ],
  [
    "model/vnd.collada+xml",
    {
      source: "iana",
      extensions: ["dae"],
    },
  ],
  [
    "model/vnd.dwf",
    {
      source: "iana",
      extensions: ["dwf"],
    },
  ],
  [
    "model/vnd.gdl",
    {
      source: "iana",
      extensions: ["gdl"],
    },
  ],
  [
    "model/vnd.gtw",
    {
      source: "iana",
      extensions: ["gtw"],
    },
  ],
  [
    "model/vnd.mts",
    {
      source: "iana",
      extensions: ["mts"],
    },
  ],
  [
    "model/vnd.opengex",
    {
      source: "iana",
      extensions: ["ogex"],
    },
  ],
  [
    "model/vnd.parasolid.transmit.binary",
    {
      source: "iana",
      extensions: ["x_b"],
    },
  ],
  [
    "model/vnd.parasolid.transmit.text",
    {
      source: "iana",
      extensions: ["x_t"],
    },
  ],
  [
    "model/vnd.sap.vds",
    {
      source: "iana",
      extensions: ["vds"],
    },
  ],
  [
    "model/vnd.usdz+zip",
    {
      source: "iana",
      extensions: ["usdz"],
    },
  ],
  [
    "model/vnd.valve.source.compiled-map",
    {
      source: "iana",
      extensions: ["bsp"],
    },
  ],
  [
    "model/vnd.vtu",
    {
      source: "iana",
      extensions: ["vtu"],
    },
  ],
  [
    "model/vrml",
    {
      source: "iana",
      extensions: ["wrl", "vrml"],
    },
  ],
  [
    "model/x3d+binary",
    {
      source: "apache",
      extensions: ["x3db", "x3dbz"],
    },
  ],
  [
    "model/x3d+fastinfoset",
    {
      source: "iana",
      extensions: ["x3db"],
    },
  ],
  [
    "model/x3d+vrml",
    {
      source: "apache",
      extensions: ["x3dv", "x3dvz"],
    },
  ],
  [
    "model/x3d+xml",
    {
      source: "iana",
      extensions: ["x3d", "x3dz"],
    },
  ],
  [
    "model/x3d-vrml",
    {
      source: "iana",
      extensions: ["x3dv"],
    },
  ],
  [
    "x-conference/x-cooltalk",
    {
      source: "apache",
      extensions: ["ice"],
    },
  ],
  [
    "video/3gpp",
    {
      source: "iana",
      extensions: ["3gp", "3gpp"],
    },
  ],
  [
    "video/3gpp2",
    {
      source: "iana",
      extensions: ["3g2"],
    },
  ],
  [
    "video/h261",
    {
      source: "iana",
      extensions: ["h261"],
    },
  ],
  [
    "video/h263",
    {
      source: "iana",
      extensions: ["h263"],
    },
  ],
  [
    "video/h264",
    {
      source: "iana",
      extensions: ["h264"],
    },
  ],
  [
    "video/iso.segment",
    {
      source: "iana",
      extensions: ["m4s"],
    },
  ],
  [
    "video/jpeg",
    {
      source: "iana",
      extensions: ["jpgv"],
    },
  ],
  [
    "video/jpm",
    {
      source: "apache",
      extensions: ["jpm", "jpgm"],
    },
  ],
  [
    "video/mj2",
    {
      source: "iana",
      extensions: ["mj2", "mjp2"],
    },
  ],
  [
    "video/mp2t",
    {
      source: "iana",
      extensions: ["ts"],
    },
  ],
  [
    "video/mp4",
    {
      source: "iana",
      extensions: ["mp4", "mp4v", "mpg4"],
    },
  ],
  [
    "video/mpeg",
    {
      source: "iana",
      extensions: ["mpeg", "mpg", "mpe", "m1v", "m2v"],
    },
  ],
  [
    "video/ogg",
    {
      source: "iana",
      extensions: ["ogv"],
    },
  ],
  [
    "video/quicktime",
    {
      source: "iana",
      extensions: ["qt", "mov"],
    },
  ],
  [
    "video/vnd.dece.hd",
    {
      source: "iana",
      extensions: ["uvh", "uvvh"],
    },
  ],
  [
    "video/vnd.dece.mobile",
    {
      source: "iana",
      extensions: ["uvm", "uvvm"],
    },
  ],
  [
    "video/vnd.dece.pd",
    {
      source: "iana",
      extensions: ["uvp", "uvvp"],
    },
  ],
  [
    "video/vnd.dece.sd",
    {
      source: "iana",
      extensions: ["uvs", "uvvs"],
    },
  ],
  [
    "video/vnd.dece.video",
    {
      source: "iana",
      extensions: ["uvv", "uvvv"],
    },
  ],
  [
    "video/vnd.dvb.file",
    {
      source: "iana",
      extensions: ["dvb"],
    },
  ],
  [
    "video/vnd.fvt",
    {
      source: "iana",
      extensions: ["fvt"],
    },
  ],
  [
    "video/vnd.mpegurl",
    {
      source: "iana",
      extensions: ["mxu", "m4u"],
    },
  ],
  [
    "video/vnd.ms-playready.media.pyv",
    {
      source: "iana",
      extensions: ["pyv"],
    },
  ],
  [
    "video/vnd.uvvu.mp4",
    {
      source: "iana",
      extensions: ["uvu", "uvvu"],
    },
  ],
  [
    "video/vnd.vivo",
    {
      source: "iana",
      extensions: ["viv"],
    },
  ],
  [
    "video/webm",
    {
      source: "apache",
      extensions: ["webm"],
    },
  ],
  [
    "video/x-f4v",
    {
      source: "apache",
      extensions: ["f4v"],
    },
  ],
  [
    "video/x-fli",
    {
      source: "apache",
      extensions: ["fli"],
    },
  ],
  [
    "video/x-flv",
    {
      source: "apache",
      extensions: ["flv"],
    },
  ],
  [
    "video/x-m4v",
    {
      source: "apache",
      extensions: ["m4v"],
    },
  ],
  [
    "video/x-matroska",
    {
      source: "apache",
      extensions: ["mkv", "mk3d", "mks"],
    },
  ],
  [
    "video/x-mng",
    {
      source: "apache",
      extensions: ["mng"],
    },
  ],
  [
    "video/x-ms-asf",
    {
      source: "apache",
      extensions: ["asf", "asx"],
    },
  ],
  [
    "video/x-ms-vob",
    {
      source: "apache",
      extensions: ["vob"],
    },
  ],
  [
    "video/x-ms-wm",
    {
      source: "apache",
      extensions: ["wm"],
    },
  ],
  [
    "video/x-ms-wmv",
    {
      source: "apache",
      extensions: ["wmv"],
    },
  ],
  [
    "video/x-ms-wmx",
    {
      source: "apache",
      extensions: ["wmx"],
    },
  ],
  [
    "video/x-ms-wvx",
    {
      source: "apache",
      extensions: ["wvx"],
    },
  ],
  [
    "video/x-msvideo",
    {
      source: "apache",
      extensions: ["avi"],
    },
  ],
  [
    "video/x-sgi-movie",
    {
      source: "apache",
      extensions: ["movie"],
    },
  ],
  [
    "video/x-smv",
    {
      source: "apache",
      extensions: ["smv"],
    },
  ],
  [
    "text/cache-manifest",
    {
      source: "iana",
      extensions: ["appcache", "manifest"],
    },
  ],
  [
    "text/calendar",
    {
      source: "iana",
      extensions: ["ics", "ifb"],
    },
  ],
  [
    "text/css",
    {
      source: "iana",
      charset: "UTF-8",
      extensions: ["css"],
    },
  ],
  [
    "text/csv",
    {
      source: "iana",
      extensions: ["csv"],
    },
  ],
  [
    "text/html",
    {
      source: "iana",
      extensions: ["html", "htm", "shtml"],
    },
  ],
  [
    "text/markdown",
    {
      source: "iana",
      extensions: ["markdown", "md"],
    },
  ],
  [
    "text/mathml",
    {
      source: "nginx",
      extensions: ["mml"],
    },
  ],
  [
    "text/n3",
    {
      source: "iana",
      charset: "UTF-8",
      extensions: ["n3"],
    },
  ],
  [
    "text/plain",
    {
      source: "iana",
      extensions: ["txt", "text", "conf", "def", "list", "log", "in", "ini"],
    },
  ],
  [
    "text/prs.lines.tag",
    {
      source: "iana",
      extensions: ["dsc"],
    },
  ],
  [
    "text/richtext",
    {
      source: "iana",
      extensions: ["rtx"],
    },
  ],
  [
    "text/rtf",
    {
      source: "iana",
      extensions: ["rtf"],
    },
  ],
  [
    "text/sgml",
    {
      source: "iana",
      extensions: ["sgml", "sgm"],
    },
  ],
  [
    "text/shex",
    {
      source: "iana",
      extensions: ["shex"],
    },
  ],
  [
    "text/spdx",
    {
      source: "iana",
      extensions: ["spdx"],
    },
  ],
  [
    "text/tab-separated-values",
    {
      source: "iana",
      extensions: ["tsv"],
    },
  ],
  [
    "text/troff",
    {
      source: "iana",
      extensions: ["t", "tr", "roff", "man", "me", "ms"],
    },
  ],
  [
    "text/turtle",
    {
      source: "iana",
      charset: "UTF-8",
      extensions: ["ttl"],
    },
  ],
  [
    "text/uri-list",
    {
      source: "iana",
      extensions: ["uri", "uris", "urls"],
    },
  ],
  [
    "text/vcard",
    {
      source: "iana",
      extensions: ["vcard"],
    },
  ],
  [
    "text/vnd.curl",
    {
      source: "iana",
      extensions: ["curl"],
    },
  ],
  [
    "text/vnd.curl.dcurl",
    {
      source: "apache",
      extensions: ["dcurl"],
    },
  ],
  [
    "text/vnd.curl.mcurl",
    {
      source: "apache",
      extensions: ["mcurl"],
    },
  ],
  [
    "text/vnd.curl.scurl",
    {
      source: "apache",
      extensions: ["scurl"],
    },
  ],
  [
    "text/vnd.dvb.subtitle",
    {
      source: "iana",
      extensions: ["sub"],
    },
  ],
  [
    "text/vnd.familysearch.gedcom",
    {
      source: "iana",
      extensions: ["ged"],
    },
  ],
  [
    "text/vnd.fly",
    {
      source: "iana",
      extensions: ["fly"],
    },
  ],
  [
    "text/vnd.fmi.flexstor",
    {
      source: "iana",
      extensions: ["flx"],
    },
  ],
  [
    "text/vnd.graphviz",
    {
      source: "iana",
      extensions: ["gv"],
    },
  ],
  [
    "text/vnd.in3d.3dml",
    {
      source: "iana",
      extensions: ["3dml"],
    },
  ],
  [
    "text/vnd.in3d.spot",
    {
      source: "iana",
      extensions: ["spot"],
    },
  ],
  [
    "text/vnd.sun.j2me.app-descriptor",
    {
      source: "iana",
      charset: "UTF-8",
      extensions: ["jad"],
    },
  ],
  [
    "text/vnd.wap.wml",
    {
      source: "iana",
      extensions: ["wml"],
    },
  ],
  [
    "text/vnd.wap.wmlscript",
    {
      source: "iana",
      extensions: ["wmls"],
    },
  ],
  [
    "text/vtt",
    {
      source: "iana",
      charset: "UTF-8",
      extensions: ["vtt"],
    },
  ],
  [
    "text/x-asm",
    {
      source: "apache",
      extensions: ["s", "asm"],
    },
  ],
  [
    "text/x-c",
    {
      source: "apache",
      extensions: ["c", "cc", "cxx", "cpp", "h", "hh", "dic"],
    },
  ],
  [
    "text/x-component",
    {
      source: "nginx",
      extensions: ["htc"],
    },
  ],
  [
    "text/x-fortran",
    {
      source: "apache",
      extensions: ["f", "for", "f77", "f90"],
    },
  ],
  [
    "text/x-java-source",
    {
      source: "apache",
      extensions: ["java"],
    },
  ],
  [
    "text/x-nfo",
    {
      source: "apache",
      extensions: ["nfo"],
    },
  ],
  [
    "text/x-opml",
    {
      source: "apache",
      extensions: ["opml"],
    },
  ],
  [
    "text/x-pascal",
    {
      source: "apache",
      extensions: ["p", "pas"],
    },
  ],
  [
    "text/x-setext",
    {
      source: "apache",
      extensions: ["etx"],
    },
  ],
  [
    "text/x-sfv",
    {
      source: "apache",
      extensions: ["sfv"],
    },
  ],
  [
    "text/x-uuencode",
    {
      source: "apache",
      extensions: ["uu"],
    },
  ],
  [
    "text/x-vcalendar",
    {
      source: "apache",
      extensions: ["vcs"],
    },
  ],
  [
    "text/x-vcard",
    {
      source: "apache",
      extensions: ["vcf"],
    },
  ],
  [
    "text/xml",
    {
      source: "iana",
      extensions: ["xml"],
    },
  ],
  [
    "image/aces",
    {
      source: "iana",
      extensions: ["exr"],
    },
  ],
  [
    "image/avci",
    {
      source: "iana",
      extensions: ["avci"],
    },
  ],
  [
    "image/avcs",
    {
      source: "iana",
      extensions: ["avcs"],
    },
  ],
  [
    "image/avif",
    {
      source: "iana",
      extensions: ["avif"],
    },
  ],
  [
    "image/bmp",
    {
      source: "iana",
      extensions: ["bmp"],
    },
  ],
  [
    "image/cgm",
    {
      source: "iana",
      extensions: ["cgm"],
    },
  ],
  [
    "image/dicom-rle",
    {
      source: "iana",
      extensions: ["drle"],
    },
  ],
  [
    "image/emf",
    {
      source: "iana",
      extensions: ["emf"],
    },
  ],
  [
    "image/fits",
    {
      source: "iana",
      extensions: ["fits"],
    },
  ],
  [
    "image/g3fax",
    {
      source: "iana",
      extensions: ["g3"],
    },
  ],
  [
    "image/gif",
    {
      source: "iana",
      extensions: ["gif"],
    },
  ],
  [
    "image/heic",
    {
      source: "iana",
      extensions: ["heic"],
    },
  ],
  [
    "image/heic-sequence",
    {
      source: "iana",
      extensions: ["heics"],
    },
  ],
  [
    "image/heif",
    {
      source: "iana",
      extensions: ["heif"],
    },
  ],
  [
    "image/heif-sequence",
    {
      source: "iana",
      extensions: ["heifs"],
    },
  ],
  [
    "image/hej2k",
    {
      source: "iana",
      extensions: ["hej2"],
    },
  ],
  [
    "image/hsj2",
    {
      source: "iana",
      extensions: ["hsj2"],
    },
  ],
  [
    "image/ief",
    {
      source: "iana",
      extensions: ["ief"],
    },
  ],
  [
    "image/jls",
    {
      source: "iana",
      extensions: ["jls"],
    },
  ],
  [
    "image/jp2",
    {
      source: "iana",
      extensions: ["jp2", "jpg2"],
    },
  ],
  [
    "image/jpeg",
    {
      source: "iana",
      extensions: ["jpeg", "jpg", "jpe", "jfif", "pjpeg", "pjp"],
    },
  ],
  [
    "image/jph",
    {
      source: "iana",
      extensions: ["jph"],
    },
  ],
  [
    "image/jphc",
    {
      source: "iana",
      extensions: ["jhc"],
    },
  ],
  [
    "image/jpm",
    {
      source: "iana",
      extensions: ["jpm"],
    },
  ],
  [
    "image/jpx",
    {
      source: "iana",
      extensions: ["jpx", "jpf"],
    },
  ],
  [
    "image/jxr",
    {
      source: "iana",
      extensions: ["jxr"],
    },
  ],
  [
    "image/jxra",
    {
      source: "iana",
      extensions: ["jxra"],
    },
  ],
  [
    "image/jxrs",
    {
      source: "iana",
      extensions: ["jxrs"],
    },
  ],
  [
    "image/jxs",
    {
      source: "iana",
      extensions: ["jxs"],
    },
  ],
  [
    "image/jxsc",
    {
      source: "iana",
      extensions: ["jxsc"],
    },
  ],
  [
    "image/jxsi",
    {
      source: "iana",
      extensions: ["jxsi"],
    },
  ],
  [
    "image/jxss",
    {
      source: "iana",
      extensions: ["jxss"],
    },
  ],
  [
    "image/ktx",
    {
      source: "iana",
      extensions: ["ktx"],
    },
  ],
  [
    "image/ktx2",
    {
      source: "iana",
      extensions: ["ktx2"],
    },
  ],
  [
    "image/png",
    {
      source: "iana",
      extensions: ["png"],
    },
  ],
  [
    "image/prs.btif",
    {
      source: "iana",
      extensions: ["btif"],
    },
  ],
  [
    "image/prs.pti",
    {
      source: "iana",
      extensions: ["pti"],
    },
  ],
  [
    "image/sgi",
    {
      source: "apache",
      extensions: ["sgi"],
    },
  ],
  [
    "image/svg+xml",
    {
      source: "iana",
      extensions: ["svg", "svgz"],
    },
  ],
  [
    "image/t38",
    {
      source: "iana",
      extensions: ["t38"],
    },
  ],
  [
    "image/tiff",
    {
      source: "iana",
      extensions: ["tif", "tiff"],
    },
  ],
  [
    "image/tiff-fx",
    {
      source: "iana",
      extensions: ["tfx"],
    },
  ],
  [
    "image/vnd.adobe.photoshop",
    {
      source: "iana",
      extensions: ["psd"],
    },
  ],
  [
    "image/vnd.airzip.accelerator.azv",
    {
      source: "iana",
      extensions: ["azv"],
    },
  ],
  [
    "image/vnd.dece.graphic",
    {
      source: "iana",
      extensions: ["uvi", "uvvi", "uvg", "uvvg"],
    },
  ],
  [
    "image/vnd.djvu",
    {
      source: "iana",
      extensions: ["djvu", "djv"],
    },
  ],
  [
    "image/vnd.dvb.subtitle",
    {
      source: "iana",
      extensions: ["sub"],
    },
  ],
  [
    "image/vnd.dwg",
    {
      source: "iana",
      extensions: ["dwg"],
    },
  ],
  [
    "image/vnd.dxf",
    {
      source: "iana",
      extensions: ["dxf"],
    },
  ],
  [
    "image/vnd.fastbidsheet",
    {
      source: "iana",
      extensions: ["fbs"],
    },
  ],
  [
    "image/vnd.fpx",
    {
      source: "iana",
      extensions: ["fpx"],
    },
  ],
  [
    "image/vnd.fst",
    {
      source: "iana",
      extensions: ["fst"],
    },
  ],
  [
    "image/vnd.fujixerox.edmics-mmr",
    {
      source: "iana",
      extensions: ["mmr"],
    },
  ],
  [
    "image/vnd.fujixerox.edmics-rlc",
    {
      source: "iana",
      extensions: ["rlc"],
    },
  ],
  [
    "image/vnd.microsoft.icon",
    {
      source: "iana",
      extensions: ["ico"],
    },
  ],
  [
    "image/vnd.ms-modi",
    {
      source: "iana",
      extensions: ["mdi"],
    },
  ],
  [
    "image/vnd.ms-photo",
    {
      source: "apache",
      extensions: ["wdp"],
    },
  ],
  [
    "image/vnd.net-fpx",
    {
      source: "iana",
      extensions: ["npx"],
    },
  ],
  [
    "image/vnd.pco.b16",
    {
      source: "iana",
      extensions: ["b16"],
    },
  ],
  [
    "image/vnd.tencent.tap",
    {
      source: "iana",
      extensions: ["tap"],
    },
  ],
  [
    "image/vnd.valve.source.texture",
    {
      source: "iana",
      extensions: ["vtf"],
    },
  ],
  [
    "image/vnd.wap.wbmp",
    {
      source: "iana",
      extensions: ["wbmp"],
    },
  ],
  [
    "image/vnd.xiff",
    {
      source: "iana",
      extensions: ["xif"],
    },
  ],
  [
    "image/vnd.zbrush.pcx",
    {
      source: "iana",
      extensions: ["pcx"],
    },
  ],
  [
    "image/webp",
    {
      source: "apache",
      extensions: ["webp"],
    },
  ],
  [
    "image/wmf",
    {
      source: "iana",
      extensions: ["wmf"],
    },
  ],
  [
    "image/x-3ds",
    {
      source: "apache",
      extensions: ["3ds"],
    },
  ],
  [
    "image/x-cmu-raster",
    {
      source: "apache",
      extensions: ["ras"],
    },
  ],
  [
    "image/x-cmx",
    {
      source: "apache",
      extensions: ["cmx"],
    },
  ],
  [
    "image/x-freehand",
    {
      source: "apache",
      extensions: ["fh", "fhc", "fh4", "fh5", "fh7"],
    },
  ],
  [
    "image/x-icon",
    {
      source: "apache",
      extensions: ["ico"],
    },
  ],
  [
    "image/x-jng",
    {
      source: "nginx",
      extensions: ["jng"],
    },
  ],
  [
    "image/x-mrsid-image",
    {
      source: "apache",
      extensions: ["sid"],
    },
  ],
  [
    "image/x-ms-bmp",
    {
      source: "nginx",
      extensions: ["bmp"],
    },
  ],
  [
    "image/x-pcx",
    {
      source: "apache",
      extensions: ["pcx"],
    },
  ],
  [
    "image/x-pict",
    {
      source: "apache",
      extensions: ["pic", "pct"],
    },
  ],
  [
    "image/x-portable-anymap",
    {
      source: "apache",
      extensions: ["pnm"],
    },
  ],
  [
    "image/x-portable-bitmap",
    {
      source: "apache",
      extensions: ["pbm"],
    },
  ],
  [
    "image/x-portable-graymap",
    {
      source: "apache",
      extensions: ["pgm"],
    },
  ],
  [
    "image/x-portable-pixmap",
    {
      source: "apache",
      extensions: ["ppm"],
    },
  ],
  [
    "image/x-rgb",
    {
      source: "apache",
      extensions: ["rgb"],
    },
  ],
  [
    "image/x-tga",
    {
      source: "apache",
      extensions: ["tga"],
    },
  ],
  [
    "image/x-xbitmap",
    {
      source: "apache",
      extensions: ["xbm"],
    },
  ],
  [
    "image/x-xpixmap",
    {
      source: "apache",
      extensions: ["xpm"],
    },
  ],
  [
    "image/x-xwindowdump",
    {
      source: "apache",
      extensions: ["xwd"],
    },
  ],
  [
    "audio/3gpp",
    {
      source: "iana",
      extensions: ["3gpp"],
    },
  ],
  [
    "audio/adpcm",
    {
      source: "apache",
      extensions: ["adp"],
    },
  ],
  [
    "audio/amr",
    {
      source: "iana",
      extensions: ["amr"],
    },
  ],
  [
    "audio/basic",
    {
      source: "iana",
      extensions: ["au", "snd"],
    },
  ],
  [
    "audio/midi",
    {
      source: "apache",
      extensions: ["mid", "midi", "kar", "rmi"],
    },
  ],
  [
    "audio/mobile-xmf",
    {
      source: "iana",
      extensions: ["mxmf"],
    },
  ],
  [
    "audio/mp4",
    {
      source: "iana",
      extensions: ["m4a", "mp4a"],
    },
  ],
  [
    "audio/mpeg",
    {
      source: "iana",
      extensions: ["mpga", "mp2", "mp2a", "mp3", "m2a", "m3a"],
    },
  ],
  [
    "audio/ogg",
    {
      source: "iana",
      extensions: ["oga", "ogg", "spx", "opus"],
    },
  ],
  [
    "audio/s3m",
    {
      source: "apache",
      extensions: ["s3m"],
    },
  ],
  [
    "audio/silk",
    {
      source: "apache",
      extensions: ["sil"],
    },
  ],
  [
    "audio/vnd.dece.audio",
    {
      source: "iana",
      extensions: ["uva", "uvva"],
    },
  ],
  [
    "audio/vnd.digital-winds",
    {
      source: "iana",
      extensions: ["eol"],
    },
  ],
  [
    "audio/vnd.dra",
    {
      source: "iana",
      extensions: ["dra"],
    },
  ],
  [
    "audio/vnd.dts",
    {
      source: "iana",
      extensions: ["dts"],
    },
  ],
  [
    "audio/vnd.dts.hd",
    {
      source: "iana",
      extensions: ["dtshd"],
    },
  ],
  [
    "audio/vnd.lucent.voice",
    {
      source: "iana",
      extensions: ["lvp"],
    },
  ],
  [
    "audio/vnd.ms-playready.media.pya",
    {
      source: "iana",
      extensions: ["pya"],
    },
  ],
  [
    "audio/vnd.nuera.ecelp4800",
    {
      source: "iana",
      extensions: ["ecelp4800"],
    },
  ],
  [
    "audio/vnd.nuera.ecelp7470",
    {
      source: "iana",
      extensions: ["ecelp7470"],
    },
  ],
  [
    "audio/vnd.nuera.ecelp9600",
    {
      source: "iana",
      extensions: ["ecelp9600"],
    },
  ],
  [
    "audio/vnd.rip",
    {
      source: "iana",
      extensions: ["rip"],
    },
  ],
  [
    "audio/webm",
    {
      source: "apache",
      extensions: ["weba"],
    },
  ],
  [
    "audio/x-aac",
    {
      source: "apache",
      extensions: ["aac"],
    },
  ],
  [
    "audio/x-aiff",
    {
      source: "apache",
      extensions: ["aif", "aiff", "aifc"],
    },
  ],
  [
    "audio/x-caf",
    {
      source: "apache",
      extensions: ["caf"],
    },
  ],
  [
    "audio/x-flac",
    {
      source: "apache",
      extensions: ["flac"],
    },
  ],
  [
    "audio/x-m4a",
    {
      source: "nginx",
      extensions: ["m4a"],
    },
  ],
  [
    "audio/x-matroska",
    {
      source: "apache",
      extensions: ["mka"],
    },
  ],
  [
    "audio/x-mpegurl",
    {
      source: "apache",
      extensions: ["m3u"],
    },
  ],
  [
    "audio/x-ms-wax",
    {
      source: "apache",
      extensions: ["wax"],
    },
  ],
  [
    "audio/x-ms-wma",
    {
      source: "apache",
      extensions: ["wma"],
    },
  ],
  [
    "audio/x-pn-realaudio",
    {
      source: "apache",
      extensions: ["ram", "ra"],
    },
  ],
  [
    "audio/x-pn-realaudio-plugin",
    {
      source: "apache",
      extensions: ["rmp"],
    },
  ],
  [
    "audio/x-realaudio",
    {
      source: "nginx",
      extensions: ["ra"],
    },
  ],
  [
    "audio/x-wav",
    {
      source: "apache",
      extensions: ["wav"],
    },
  ],
  [
    "audio/x-gsm",
    {
      source: "apache",
      extensions: ["gsm"],
    },
  ],
  [
    "audio/xm",
    {
      source: "apache",
      extensions: ["xm"],
    },
  ],
  [
    "application/andrew-inset",
    {
      source: "iana",
      extensions: ["ez"],
    },
  ],
  [
    "application/applixware",
    {
      source: "apache",
      extensions: ["aw"],
    },
  ],
  [
    "application/atom+xml",
    {
      source: "iana",
      extensions: ["atom"],
    },
  ],
  [
    "application/atomcat+xml",
    {
      source: "iana",
      extensions: ["atomcat"],
    },
  ],
  [
    "application/atomdeleted+xml",
    {
      source: "iana",
      extensions: ["atomdeleted"],
    },
  ],
  [
    "application/atomsvc+xml",
    {
      source: "iana",
      extensions: ["atomsvc"],
    },
  ],
  [
    "application/atsc-dwd+xml",
    {
      source: "iana",
      extensions: ["dwd"],
    },
  ],
  [
    "application/atsc-held+xml",
    {
      source: "iana",
      extensions: ["held"],
    },
  ],
  [
    "application/atsc-rsat+xml",
    {
      source: "iana",
      extensions: ["rsat"],
    },
  ],
  [
    "application/calendar+xml",
    {
      source: "iana",
      extensions: ["xcs"],
    },
  ],
  [
    "application/ccxml+xml",
    {
      source: "iana",
      extensions: ["ccxml"],
    },
  ],
  [
    "application/cdfx+xml",
    {
      source: "iana",
      extensions: ["cdfx"],
    },
  ],
  [
    "application/cdmi-capability",
    {
      source: "iana",
      extensions: ["cdmia"],
    },
  ],
  [
    "application/cdmi-container",
    {
      source: "iana",
      extensions: ["cdmic"],
    },
  ],
  [
    "application/cdmi-domain",
    {
      source: "iana",
      extensions: ["cdmid"],
    },
  ],
  [
    "application/cdmi-object",
    {
      source: "iana",
      extensions: ["cdmio"],
    },
  ],
  [
    "application/cdmi-queue",
    {
      source: "iana",
      extensions: ["cdmiq"],
    },
  ],
  [
    "application/cpl+xml",
    {
      source: "iana",
      extensions: ["cpl"],
    },
  ],
  [
    "application/cu-seeme",
    {
      source: "apache",
      extensions: ["cu"],
    },
  ],
  [
    "application/dash+xml",
    {
      source: "iana",
      extensions: ["mpd"],
    },
  ],
  [
    "application/dash-patch+xml",
    {
      source: "iana",
      extensions: ["mpp"],
    },
  ],
  [
    "application/davmount+xml",
    {
      source: "iana",
      extensions: ["davmount"],
    },
  ],
  [
    "application/dicom",
    {
      source: "iana",
      extensions: ["dcm"],
    },
  ],
  [
    "application/docbook+xml",
    {
      source: "apache",
      extensions: ["dbk"],
    },
  ],
  [
    "application/dssc+der",
    {
      source: "iana",
      extensions: ["dssc"],
    },
  ],
  [
    "application/dssc+xml",
    {
      source: "iana",
      extensions: ["xdssc"],
    },
  ],
  [
    "application/ecmascript",
    {
      source: "iana",
      extensions: ["es", "ecma"],
    },
  ],
  [
    "application/emma+xml",
    {
      source: "iana",
      extensions: ["emma"],
    },
  ],
  [
    "application/emotionml+xml",
    {
      source: "iana",
      extensions: ["emotionml"],
    },
  ],
  [
    "application/epub+zip",
    {
      source: "iana",
      extensions: ["epub"],
    },
  ],
  [
    "application/exi",
    {
      source: "iana",
      extensions: ["exi"],
    },
  ],
  [
    "application/express",
    {
      source: "iana",
      extensions: ["exp"],
    },
  ],
  [
    "application/fdt+xml",
    {
      source: "iana",
      extensions: ["fdt"],
    },
  ],
  [
    "application/font-tdpfr",
    {
      source: "iana",
      extensions: ["pfr"],
    },
  ],
  [
    "application/geo+json",
    {
      source: "iana",
      extensions: ["geojson"],
    },
  ],
  [
    "application/gml+xml",
    {
      source: "iana",
      extensions: ["gml"],
    },
  ],
  [
    "application/gpx+xml",
    {
      source: "apache",
      extensions: ["gpx"],
    },
  ],
  [
    "application/gxf",
    {
      source: "apache",
      extensions: ["gxf"],
    },
  ],
  [
    "application/gzip",
    {
      source: "iana",
      extensions: ["gz"],
    },
  ],
  [
    "application/hyperstudio",
    {
      source: "iana",
      extensions: ["stk"],
    },
  ],
  [
    "application/inkml+xml",
    {
      source: "iana",
      extensions: ["ink", "inkml"],
    },
  ],
  [
    "application/ipfix",
    {
      source: "iana",
      extensions: ["ipfix"],
    },
  ],
  [
    "application/its+xml",
    {
      source: "iana",
      extensions: ["its"],
    },
  ],
  [
    "application/java-archive",
    {
      source: "apache",
      extensions: ["jar", "war", "ear"],
    },
  ],
  [
    "application/java-serialized-object",
    {
      source: "apache",
      extensions: ["ser"],
    },
  ],
  [
    "application/java-vm",
    {
      source: "apache",
      extensions: ["class"],
    },
  ],
  [
    "application/javascript",
    {
      source: "iana",
      charset: "UTF-8",
      extensions: ["js", "mjs"],
    },
  ],
  [
    "application/json",
    {
      source: "iana",
      charset: "UTF-8",
      extensions: ["json", "map"],
    },
  ],
  [
    "application/jsonml+json",
    {
      source: "apache",
      extensions: ["jsonml"],
    },
  ],
  [
    "application/ld+json",
    {
      source: "iana",
      extensions: ["jsonld"],
    },
  ],
  [
    "application/lgr+xml",
    {
      source: "iana",
      extensions: ["lgr"],
    },
  ],
  [
    "application/lost+xml",
    {
      source: "iana",
      extensions: ["lostxml"],
    },
  ],
  [
    "application/mac-binhex40",
    {
      source: "iana",
      extensions: ["hqx"],
    },
  ],
  [
    "application/mac-compactpro",
    {
      source: "apache",
      extensions: ["cpt"],
    },
  ],
  [
    "application/mads+xml",
    {
      source: "iana",
      extensions: ["mads"],
    },
  ],
  [
    "application/manifest+json",
    {
      source: "iana",
      charset: "UTF-8",
      extensions: ["webmanifest"],
    },
  ],
  [
    "application/marc",
    {
      source: "iana",
      extensions: ["mrc"],
    },
  ],
  [
    "application/marcxml+xml",
    {
      source: "iana",
      extensions: ["mrcx"],
    },
  ],
  [
    "application/mathematica",
    {
      source: "iana",
      extensions: ["ma", "nb", "mb"],
    },
  ],
  [
    "application/mathml+xml",
    {
      source: "iana",
      extensions: ["mathml"],
    },
  ],
  [
    "application/mbox",
    {
      source: "iana",
      extensions: ["mbox"],
    },
  ],
  [
    "application/media-policy-dataset+xml",
    {
      source: "iana",
      extensions: ["mpf"],
    },
  ],
  [
    "application/mediaservercontrol+xml",
    {
      source: "iana",
      extensions: ["mscml"],
    },
  ],
  [
    "application/metalink+xml",
    {
      source: "apache",
      extensions: ["metalink"],
    },
  ],
  [
    "application/metalink4+xml",
    {
      source: "iana",
      extensions: ["meta4"],
    },
  ],
  [
    "application/mets+xml",
    {
      source: "iana",
      extensions: ["mets"],
    },
  ],
  [
    "application/mmt-aei+xml",
    {
      source: "iana",
      extensions: ["maei"],
    },
  ],
  [
    "application/mmt-usd+xml",
    {
      source: "iana",
      extensions: ["musd"],
    },
  ],
  [
    "application/mods+xml",
    {
      source: "iana",
      extensions: ["mods"],
    },
  ],
  [
    "application/mp21",
    {
      source: "iana",
      extensions: ["m21", "mp21"],
    },
  ],
  [
    "application/mp4",
    {
      source: "iana",
      extensions: ["mp4s", "m4p"],
    },
  ],
  [
    "application/msword",
    {
      source: "iana",
      extensions: ["doc", "dot"],
    },
  ],
  [
    "application/mxf",
    {
      source: "iana",
      extensions: ["mxf"],
    },
  ],
  [
    "application/n-quads",
    {
      source: "iana",
      extensions: ["nq"],
    },
  ],
  [
    "application/n-triples",
    {
      source: "iana",
      extensions: ["nt"],
    },
  ],
  [
    "application/node",
    {
      source: "iana",
      extensions: ["cjs"],
    },
  ],
  [
    "application/octet-stream",
    {
      source: "iana",
      extensions: [
        "bin",
        "dms",
        "lrf",
        "mar",
        "so",
        "dist",
        "distz",
        "pkg",
        "bpk",
        "dump",
        "elc",
        "deploy",
        "exe",
        "dll",
        "deb",
        "dmg",
        "iso",
        "img",
        "msi",
        "msp",
        "msm",
        "buffer",
      ],
    },
  ],
  [
    "application/oda",
    {
      source: "iana",
      extensions: ["oda"],
    },
  ],
  [
    "application/oebps-package+xml",
    {
      source: "iana",
      extensions: ["opf"],
    },
  ],
  [
    "application/ogg",
    {
      source: "iana",
      extensions: ["ogx"],
    },
  ],
  [
    "application/omdoc+xml",
    {
      source: "apache",
      extensions: ["omdoc"],
    },
  ],
  [
    "application/onenote",
    {
      source: "apache",
      extensions: ["onetoc", "onetoc2", "onetmp", "onepkg"],
    },
  ],
  [
    "application/oxps",
    {
      source: "iana",
      extensions: ["oxps"],
    },
  ],
  [
    "application/p2p-overlay+xml",
    {
      source: "iana",
      extensions: ["relo"],
    },
  ],
  [
    "application/patch-ops-error+xml",
    {
      source: "iana",
      extensions: ["xer"],
    },
  ],
  [
    "application/pdf",
    {
      source: "iana",
      extensions: ["pdf"],
    },
  ],
  [
    "application/pgp-encrypted",
    {
      source: "iana",
      extensions: ["pgp"],
    },
  ],
  [
    "application/pgp-keys",
    {
      source: "iana",
      extensions: ["asc"],
    },
  ],
  [
    "application/pgp-signature",
    {
      source: "iana",
      extensions: ["asc", "sig"],
    },
  ],
  [
    "application/pics-rules",
    {
      source: "apache",
      extensions: ["prf"],
    },
  ],
  [
    "application/pkcs10",
    {
      source: "iana",
      extensions: ["p10"],
    },
  ],
  [
    "application/pkcs7-mime",
    {
      source: "iana",
      extensions: ["p7m", "p7c"],
    },
  ],
  [
    "application/pkcs7-signature",
    {
      source: "iana",
      extensions: ["p7s"],
    },
  ],
  [
    "application/pkcs8",
    {
      source: "iana",
      extensions: ["p8"],
    },
  ],
  [
    "application/pkix-attr-cert",
    {
      source: "iana",
      extensions: ["ac"],
    },
  ],
  [
    "application/pkix-cert",
    {
      source: "iana",
      extensions: ["cer"],
    },
  ],
  [
    "application/pkix-crl",
    {
      source: "iana",
      extensions: ["crl"],
    },
  ],
  [
    "application/pkix-pkipath",
    {
      source: "iana",
      extensions: ["pkipath"],
    },
  ],
  [
    "application/pkixcmp",
    {
      source: "iana",
      extensions: ["pki"],
    },
  ],
  [
    "application/pls+xml",
    {
      source: "iana",
      extensions: ["pls"],
    },
  ],
  [
    "application/postscript",
    {
      source: "iana",
      extensions: ["ai", "eps", "ps"],
    },
  ],
  [
    "application/provenance+xml",
    {
      source: "iana",
      extensions: ["provx"],
    },
  ],
  [
    "application/prs.cww",
    {
      source: "iana",
      extensions: ["cww"],
    },
  ],
  [
    "application/pskc+xml",
    {
      source: "iana",
      extensions: ["pskcxml"],
    },
  ],
  [
    "application/rdf+xml",
    {
      source: "iana",
      extensions: ["rdf", "owl"],
    },
  ],
  [
    "application/reginfo+xml",
    {
      source: "iana",
      extensions: ["rif"],
    },
  ],
  [
    "application/relax-ng-compact-syntax",
    {
      source: "iana",
      extensions: ["rnc"],
    },
  ],
  [
    "application/resource-lists+xml",
    {
      source: "iana",
      extensions: ["rl"],
    },
  ],
  [
    "application/resource-lists-diff+xml",
    {
      source: "iana",
      extensions: ["rld"],
    },
  ],
  [
    "application/rls-services+xml",
    {
      source: "iana",
      extensions: ["rs"],
    },
  ],
  [
    "application/route-apd+xml",
    {
      source: "iana",
      extensions: ["rapd"],
    },
  ],
  [
    "application/route-s-tsid+xml",
    {
      source: "iana",
      extensions: ["sls"],
    },
  ],
  [
    "application/route-usd+xml",
    {
      source: "iana",
      extensions: ["rusd"],
    },
  ],
  [
    "application/rpki-ghostbusters",
    {
      source: "iana",
      extensions: ["gbr"],
    },
  ],
  [
    "application/rpki-manifest",
    {
      source: "iana",
      extensions: ["mft"],
    },
  ],
  [
    "application/rpki-roa",
    {
      source: "iana",
      extensions: ["roa"],
    },
  ],
  [
    "application/rsd+xml",
    {
      source: "apache",
      extensions: ["rsd"],
    },
  ],
  [
    "application/rss+xml",
    {
      source: "apache",
      extensions: ["rss"],
    },
  ],
  [
    "application/rtf",
    {
      source: "iana",
      extensions: ["rtf"],
    },
  ],
  [
    "application/sbml+xml",
    {
      source: "iana",
      extensions: ["sbml"],
    },
  ],
  [
    "application/scvp-cv-request",
    {
      source: "iana",
      extensions: ["scq"],
    },
  ],
  [
    "application/scvp-cv-response",
    {
      source: "iana",
      extensions: ["scs"],
    },
  ],
  [
    "application/scvp-vp-request",
    {
      source: "iana",
      extensions: ["spq"],
    },
  ],
  [
    "application/scvp-vp-response",
    {
      source: "iana",
      extensions: ["spp"],
    },
  ],
  [
    "application/sdp",
    {
      source: "iana",
      extensions: ["sdp"],
    },
  ],
  [
    "application/senml+xml",
    {
      source: "iana",
      extensions: ["senmlx"],
    },
  ],
  [
    "application/sensml+xml",
    {
      source: "iana",
      extensions: ["sensmlx"],
    },
  ],
  [
    "application/set-payment-initiation",
    {
      source: "iana",
      extensions: ["setpay"],
    },
  ],
  [
    "application/set-registration-initiation",
    {
      source: "iana",
      extensions: ["setreg"],
    },
  ],
  [
    "application/shf+xml",
    {
      source: "iana",
      extensions: ["shf"],
    },
  ],
  [
    "application/sieve",
    {
      source: "iana",
      extensions: ["siv", "sieve"],
    },
  ],
  [
    "application/smil+xml",
    {
      source: "iana",
      extensions: ["smi", "smil"],
    },
  ],
  [
    "application/sparql-query",
    {
      source: "iana",
      extensions: ["rq"],
    },
  ],
  [
    "application/sparql-results+xml",
    {
      source: "iana",
      extensions: ["srx"],
    },
  ],
  [
    "application/srgs",
    {
      source: "iana",
      extensions: ["gram"],
    },
  ],
  [
    "application/srgs+xml",
    {
      source: "iana",
      extensions: ["grxml"],
    },
  ],
  [
    "application/sru+xml",
    {
      source: "iana",
      extensions: ["sru"],
    },
  ],
  [
    "application/ssdl+xml",
    {
      source: "apache",
      extensions: ["ssdl"],
    },
  ],
  [
    "application/ssml+xml",
    {
      source: "iana",
      extensions: ["ssml"],
    },
  ],
  [
    "application/swid+xml",
    {
      source: "iana",
      extensions: ["swidtag"],
    },
  ],
  [
    "application/tei+xml",
    {
      source: "iana",
      extensions: ["tei", "teicorpus"],
    },
  ],
  [
    "application/thraud+xml",
    {
      source: "iana",
      extensions: ["tfi"],
    },
  ],
  [
    "application/timestamped-data",
    {
      source: "iana",
      extensions: ["tsd"],
    },
  ],
  [
    "application/trig",
    {
      source: "iana",
      extensions: ["trig"],
    },
  ],
  [
    "application/ttml+xml",
    {
      source: "iana",
      extensions: ["ttml"],
    },
  ],
  [
    "application/urc-ressheet+xml",
    {
      source: "iana",
      extensions: ["rsheet"],
    },
  ],
  [
    "application/urc-targetdesc+xml",
    {
      source: "iana",
      extensions: ["td"],
    },
  ],
  [
    "application/vnd.1000minds.decision-model+xml",
    {
      source: "iana",
      extensions: ["1km"],
    },
  ],
  [
    "application/vnd.3gpp.pic-bw-large",
    {
      source: "iana",
      extensions: ["plb"],
    },
  ],
  [
    "application/vnd.3gpp.pic-bw-small",
    {
      source: "iana",
      extensions: ["psb"],
    },
  ],
  [
    "application/vnd.3gpp.pic-bw-var",
    {
      source: "iana",
      extensions: ["pvb"],
    },
  ],
  [
    "application/vnd.3gpp2.tcap",
    {
      source: "iana",
      extensions: ["tcap"],
    },
  ],
  [
    "application/vnd.3m.post-it-notes",
    {
      source: "iana",
      extensions: ["pwn"],
    },
  ],
  [
    "application/vnd.accpac.simply.aso",
    {
      source: "iana",
      extensions: ["aso"],
    },
  ],
  [
    "application/vnd.accpac.simply.imp",
    {
      source: "iana",
      extensions: ["imp"],
    },
  ],
  [
    "application/vnd.acucobol",
    {
      source: "iana",
      extensions: ["acu"],
    },
  ],
  [
    "application/vnd.acucorp",
    {
      source: "iana",
      extensions: ["atc", "acutc"],
    },
  ],
  [
    "application/vnd.adobe.air-application-installer-package+zip",
    {
      source: "apache",
      extensions: ["air"],
    },
  ],
  [
    "application/vnd.adobe.formscentral.fcdt",
    {
      source: "iana",
      extensions: ["fcdt"],
    },
  ],
  [
    "application/vnd.adobe.fxp",
    {
      source: "iana",
      extensions: ["fxp", "fxpl"],
    },
  ],
  [
    "application/vnd.adobe.xdp+xml",
    {
      source: "iana",
      extensions: ["xdp"],
    },
  ],
  [
    "application/vnd.adobe.xfdf",
    {
      source: "iana",
      extensions: ["xfdf"],
    },
  ],
  [
    "application/vnd.age",
    {
      source: "iana",
      extensions: ["age"],
    },
  ],
  [
    "application/vnd.ahead.space",
    {
      source: "iana",
      extensions: ["ahead"],
    },
  ],
  [
    "application/vnd.airzip.filesecure.azf",
    {
      source: "iana",
      extensions: ["azf"],
    },
  ],
  [
    "application/vnd.airzip.filesecure.azs",
    {
      source: "iana",
      extensions: ["azs"],
    },
  ],
  [
    "application/vnd.amazon.ebook",
    {
      source: "apache",
      extensions: ["azw"],
    },
  ],
  [
    "application/vnd.americandynamics.acc",
    {
      source: "iana",
      extensions: ["acc"],
    },
  ],
  [
    "application/vnd.amiga.ami",
    {
      source: "iana",
      extensions: ["ami"],
    },
  ],
  [
    "application/vnd.android.package-archive",
    {
      source: "apache",
      extensions: ["apk"],
    },
  ],
  [
    "application/vnd.anser-web-certificate-issue-initiation",
    {
      source: "iana",
      extensions: ["cii"],
    },
  ],
  [
    "application/vnd.anser-web-funds-transfer-initiation",
    {
      source: "apache",
      extensions: ["fti"],
    },
  ],
  [
    "application/vnd.antix.game-component",
    {
      source: "iana",
      extensions: ["atx"],
    },
  ],
  [
    "application/vnd.apple.installer+xml",
    {
      source: "iana",
      extensions: ["mpkg"],
    },
  ],
  [
    "application/vnd.apple.keynote",
    {
      source: "iana",
      extensions: ["key"],
    },
  ],
  [
    "application/vnd.apple.mpegurl",
    {
      source: "iana",
      extensions: ["m3u8"],
    },
  ],
  [
    "application/vnd.apple.numbers",
    {
      source: "iana",
      extensions: ["numbers"],
    },
  ],
  [
    "application/vnd.apple.pages",
    {
      source: "iana",
      extensions: ["pages"],
    },
  ],
  [
    "application/vnd.aristanetworks.swi",
    {
      source: "iana",
      extensions: ["swi"],
    },
  ],
  [
    "application/vnd.astraea-software.iota",
    {
      source: "iana",
      extensions: ["iota"],
    },
  ],
  [
    "application/vnd.audiograph",
    {
      source: "iana",
      extensions: ["aep"],
    },
  ],
  [
    "application/vnd.balsamiq.bmml+xml",
    {
      source: "iana",
      extensions: ["bmml"],
    },
  ],
  [
    "application/vnd.blueice.multipass",
    {
      source: "iana",
      extensions: ["mpm"],
    },
  ],
  [
    "application/vnd.bmi",
    {
      source: "iana",
      extensions: ["bmi"],
    },
  ],
  [
    "application/vnd.businessobjects",
    {
      source: "iana",
      extensions: ["rep"],
    },
  ],
  [
    "application/vnd.chemdraw+xml",
    {
      source: "iana",
      extensions: ["cdxml"],
    },
  ],
  [
    "application/vnd.chipnuts.karaoke-mmd",
    {
      source: "iana",
      extensions: ["mmd"],
    },
  ],
  [
    "application/vnd.cinderella",
    {
      source: "iana",
      extensions: ["cdy"],
    },
  ],
  [
    "application/vnd.citationstyles.style+xml",
    {
      source: "iana",
      extensions: ["csl"],
    },
  ],
  [
    "application/vnd.claymore",
    {
      source: "iana",
      extensions: ["cla"],
    },
  ],
  [
    "application/vnd.cloanto.rp9",
    {
      source: "iana",
      extensions: ["rp9"],
    },
  ],
  [
    "application/vnd.clonk.c4group",
    {
      source: "iana",
      extensions: ["c4g", "c4d", "c4f", "c4p", "c4u"],
    },
  ],
  [
    "application/vnd.cluetrust.cartomobile-config",
    {
      source: "iana",
      extensions: ["c11amc"],
    },
  ],
  [
    "application/vnd.cluetrust.cartomobile-config-pkg",
    {
      source: "iana",
      extensions: ["c11amz"],
    },
  ],
  [
    "application/vnd.commonspace",
    {
      source: "iana",
      extensions: ["csp"],
    },
  ],
  [
    "application/vnd.contact.cmsg",
    {
      source: "iana",
      extensions: ["cdbcmsg"],
    },
  ],
  [
    "application/vnd.cosmocaller",
    {
      source: "iana",
      extensions: ["cmc"],
    },
  ],
  [
    "application/vnd.crick.clicker",
    {
      source: "iana",
      extensions: ["clkx"],
    },
  ],
  [
    "application/vnd.crick.clicker.keyboard",
    {
      source: "iana",
      extensions: ["clkk"],
    },
  ],
  [
    "application/vnd.crick.clicker.palette",
    {
      source: "iana",
      extensions: ["clkp"],
    },
  ],
  [
    "application/vnd.crick.clicker.template",
    {
      source: "iana",
      extensions: ["clkt"],
    },
  ],
  [
    "application/vnd.crick.clicker.wordbank",
    {
      source: "iana",
      extensions: ["clkw"],
    },
  ],
  [
    "application/vnd.criticaltools.wbs+xml",
    {
      source: "iana",
      extensions: ["wbs"],
    },
  ],
  [
    "application/vnd.ctc-posml",
    {
      source: "iana",
      extensions: ["pml"],
    },
  ],
  [
    "application/vnd.cups-ppd",
    {
      source: "iana",
      extensions: ["ppd"],
    },
  ],
  [
    "application/vnd.curl.car",
    {
      source: "apache",
      extensions: ["car"],
    },
  ],
  [
    "application/vnd.curl.pcurl",
    {
      source: "apache",
      extensions: ["pcurl"],
    },
  ],
  [
    "application/vnd.dart",
    {
      source: "iana",
      extensions: ["dart"],
    },
  ],
  [
    "application/vnd.data-vision.rdz",
    {
      source: "iana",
      extensions: ["rdz"],
    },
  ],
  [
    "application/vnd.dbf",
    {
      source: "iana",
      extensions: ["dbf"],
    },
  ],
  [
    "application/vnd.dece.data",
    {
      source: "iana",
      extensions: ["uvf", "uvvf", "uvd", "uvvd"],
    },
  ],
  [
    "application/vnd.dece.ttml+xml",
    {
      source: "iana",
      extensions: ["uvt", "uvvt"],
    },
  ],
  [
    "application/vnd.dece.unspecified",
    {
      source: "iana",
      extensions: ["uvx", "uvvx"],
    },
  ],
  [
    "application/vnd.dece.zip",
    {
      source: "iana",
      extensions: ["uvz", "uvvz"],
    },
  ],
  [
    "application/vnd.denovo.fcselayout-link",
    {
      source: "iana",
      extensions: ["fe_launch"],
    },
  ],
  [
    "application/vnd.dna",
    {
      source: "iana",
      extensions: ["dna"],
    },
  ],
  [
    "application/vnd.dolby.mlp",
    {
      source: "apache",
      extensions: ["mlp"],
    },
  ],
  [
    "application/vnd.dpgraph",
    {
      source: "iana",
      extensions: ["dpg"],
    },
  ],
  [
    "application/vnd.dreamfactory",
    {
      source: "iana",
      extensions: ["dfac"],
    },
  ],
  [
    "application/vnd.ds-keypoint",
    {
      source: "apache",
      extensions: ["kpxx"],
    },
  ],
  [
    "application/vnd.dvb.ait",
    {
      source: "iana",
      extensions: ["ait"],
    },
  ],
  [
    "application/vnd.dvb.service",
    {
      source: "iana",
      extensions: ["svc"],
    },
  ],
  [
    "application/vnd.dynageo",
    {
      source: "iana",
      extensions: ["geo"],
    },
  ],
  [
    "application/vnd.ecowin.chart",
    {
      source: "iana",
      extensions: ["mag"],
    },
  ],
  [
    "application/vnd.enliven",
    {
      source: "iana",
      extensions: ["nml"],
    },
  ],
  [
    "application/vnd.epson.esf",
    {
      source: "iana",
      extensions: ["esf"],
    },
  ],
  [
    "application/vnd.epson.msf",
    {
      source: "iana",
      extensions: ["msf"],
    },
  ],
  [
    "application/vnd.epson.quickanime",
    {
      source: "iana",
      extensions: ["qam"],
    },
  ],
  [
    "application/vnd.epson.salt",
    {
      source: "iana",
      extensions: ["slt"],
    },
  ],
  [
    "application/vnd.epson.ssf",
    {
      source: "iana",
      extensions: ["ssf"],
    },
  ],
  [
    "application/vnd.eszigno3+xml",
    {
      source: "iana",
      extensions: ["es3", "et3"],
    },
  ],
  [
    "application/vnd.ezpix-album",
    {
      source: "iana",
      extensions: ["ez2"],
    },
  ],
  [
    "application/vnd.ezpix-package",
    {
      source: "iana",
      extensions: ["ez3"],
    },
  ],
  [
    "application/vnd.fdf",
    {
      source: "iana",
      extensions: ["fdf"],
    },
  ],
  [
    "application/vnd.fdsn.mseed",
    {
      source: "iana",
      extensions: ["mseed"],
    },
  ],
  [
    "application/vnd.fdsn.seed",
    {
      source: "iana",
      extensions: ["seed", "dataless"],
    },
  ],
  [
    "application/vnd.flographit",
    {
      source: "iana",
      extensions: ["gph"],
    },
  ],
  [
    "application/vnd.fluxtime.clip",
    {
      source: "iana",
      extensions: ["ftc"],
    },
  ],
  [
    "application/vnd.framemaker",
    {
      source: "iana",
      extensions: ["fm", "frame", "maker", "book"],
    },
  ],
  [
    "application/vnd.frogans.fnc",
    {
      source: "iana",
      extensions: ["fnc"],
    },
  ],
  [
    "application/vnd.frogans.ltf",
    {
      source: "iana",
      extensions: ["ltf"],
    },
  ],
  [
    "application/vnd.fsc.weblaunch",
    {
      source: "iana",
      extensions: ["fsc"],
    },
  ],
  [
    "application/vnd.fujitsu.oasys",
    {
      source: "iana",
      extensions: ["oas"],
    },
  ],
  [
    "application/vnd.fujitsu.oasys2",
    {
      source: "iana",
      extensions: ["oa2"],
    },
  ],
  [
    "application/vnd.fujitsu.oasys3",
    {
      source: "iana",
      extensions: ["oa3"],
    },
  ],
  [
    "application/vnd.fujitsu.oasysgp",
    {
      source: "iana",
      extensions: ["fg5"],
    },
  ],
  [
    "application/vnd.fujitsu.oasysprs",
    {
      source: "iana",
      extensions: ["bh2"],
    },
  ],
  [
    "application/vnd.fujixerox.ddd",
    {
      source: "iana",
      extensions: ["ddd"],
    },
  ],
  [
    "application/vnd.fujixerox.docuworks",
    {
      source: "iana",
      extensions: ["xdw"],
    },
  ],
  [
    "application/vnd.fujixerox.docuworks.binder",
    {
      source: "iana",
      extensions: ["xbd"],
    },
  ],
  [
    "application/vnd.fuzzysheet",
    {
      source: "iana",
      extensions: ["fzs"],
    },
  ],
  [
    "application/vnd.genomatix.tuxedo",
    {
      source: "iana",
      extensions: ["txd"],
    },
  ],
  [
    "application/vnd.geogebra.file",
    {
      source: "iana",
      extensions: ["ggb"],
    },
  ],
  [
    "application/vnd.geogebra.tool",
    {
      source: "iana",
      extensions: ["ggt"],
    },
  ],
  [
    "application/vnd.geometry-explorer",
    {
      source: "iana",
      extensions: ["gex", "gre"],
    },
  ],
  [
    "application/vnd.geonext",
    {
      source: "iana",
      extensions: ["gxt"],
    },
  ],
  [
    "application/vnd.geoplan",
    {
      source: "iana",
      extensions: ["g2w"],
    },
  ],
  [
    "application/vnd.geospace",
    {
      source: "iana",
      extensions: ["g3w"],
    },
  ],
  [
    "application/vnd.gmx",
    {
      source: "iana",
      extensions: ["gmx"],
    },
  ],
  [
    "application/vnd.google-earth.kml+xml",
    {
      source: "iana",
      extensions: ["kml"],
    },
  ],
  [
    "application/vnd.google-earth.kmz",
    {
      source: "iana",
      extensions: ["kmz"],
    },
  ],
  [
    "application/vnd.grafeq",
    {
      source: "iana",
      extensions: ["gqf", "gqs"],
    },
  ],
  [
    "application/vnd.groove-account",
    {
      source: "iana",
      extensions: ["gac"],
    },
  ],
  [
    "application/vnd.groove-help",
    {
      source: "iana",
      extensions: ["ghf"],
    },
  ],
  [
    "application/vnd.groove-identity-message",
    {
      source: "iana",
      extensions: ["gim"],
    },
  ],
  [
    "application/vnd.groove-injector",
    {
      source: "iana",
      extensions: ["grv"],
    },
  ],
  [
    "application/vnd.groove-tool-message",
    {
      source: "iana",
      extensions: ["gtm"],
    },
  ],
  [
    "application/vnd.groove-tool-template",
    {
      source: "iana",
      extensions: ["tpl"],
    },
  ],
  [
    "application/vnd.groove-vcard",
    {
      source: "iana",
      extensions: ["vcg"],
    },
  ],
  [
    "application/vnd.hal+xml",
    {
      source: "iana",
      extensions: ["hal"],
    },
  ],
  [
    "application/vnd.handheld-entertainment+xml",
    {
      source: "iana",
      extensions: ["zmm"],
    },
  ],
  [
    "application/vnd.hbci",
    {
      source: "iana",
      extensions: ["hbci"],
    },
  ],
  [
    "application/vnd.hhe.lesson-player",
    {
      source: "iana",
      extensions: ["les"],
    },
  ],
  [
    "application/vnd.hp-hpgl",
    {
      source: "iana",
      extensions: ["hpgl"],
    },
  ],
  [
    "application/vnd.hp-hpid",
    {
      source: "iana",
      extensions: ["hpid"],
    },
  ],
  [
    "application/vnd.hp-hps",
    {
      source: "iana",
      extensions: ["hps"],
    },
  ],
  [
    "application/vnd.hp-jlyt",
    {
      source: "iana",
      extensions: ["jlt"],
    },
  ],
  [
    "application/vnd.hp-pcl",
    {
      source: "iana",
      extensions: ["pcl"],
    },
  ],
  [
    "application/vnd.hp-pclxl",
    {
      source: "iana",
      extensions: ["pclxl"],
    },
  ],
  [
    "application/vnd.hydrostatix.sof-data",
    {
      source: "iana",
      extensions: ["sfd-hdstx"],
    },
  ],
  [
    "application/vnd.ibm.minipay",
    {
      source: "iana",
      extensions: ["mpy"],
    },
  ],
  [
    "application/vnd.ibm.modcap",
    {
      source: "iana",
      extensions: ["afp", "listafp", "list3820"],
    },
  ],
  [
    "application/vnd.ibm.rights-management",
    {
      source: "iana",
      extensions: ["irm"],
    },
  ],
  [
    "application/vnd.ibm.secure-container",
    {
      source: "iana",
      extensions: ["sc"],
    },
  ],
  [
    "application/vnd.iccprofile",
    {
      source: "iana",
      extensions: ["icc", "icm"],
    },
  ],
  [
    "application/vnd.igloader",
    {
      source: "iana",
      extensions: ["igl"],
    },
  ],
  [
    "application/vnd.immervision-ivp",
    {
      source: "iana",
      extensions: ["ivp"],
    },
  ],
  [
    "application/vnd.immervision-ivu",
    {
      source: "iana",
      extensions: ["ivu"],
    },
  ],
  [
    "application/vnd.insors.igm",
    {
      source: "iana",
      extensions: ["igm"],
    },
  ],
  [
    "application/vnd.intercon.formnet",
    {
      source: "iana",
      extensions: ["xpw", "xpx"],
    },
  ],
  [
    "application/vnd.intergeo",
    {
      source: "iana",
      extensions: ["i2g"],
    },
  ],
  [
    "application/vnd.intu.qbo",
    {
      source: "iana",
      extensions: ["qbo"],
    },
  ],
  [
    "application/vnd.intu.qfx",
    {
      source: "iana",
      extensions: ["qfx"],
    },
  ],
  [
    "application/vnd.ipunplugged.rcprofile",
    {
      source: "iana",
      extensions: ["rcprofile"],
    },
  ],
  [
    "application/vnd.irepository.package+xml",
    {
      source: "iana",
      extensions: ["irp"],
    },
  ],
  [
    "application/vnd.is-xpr",
    {
      source: "iana",
      extensions: ["xpr"],
    },
  ],
  [
    "application/vnd.isac.fcs",
    {
      source: "iana",
      extensions: ["fcs"],
    },
  ],
  [
    "application/vnd.jam",
    {
      source: "iana",
      extensions: ["jam"],
    },
  ],
  [
    "application/vnd.jcp.javame.midlet-rms",
    {
      source: "iana",
      extensions: ["rms"],
    },
  ],
  [
    "application/vnd.jisp",
    {
      source: "iana",
      extensions: ["jisp"],
    },
  ],
  [
    "application/vnd.joost.joda-archive",
    {
      source: "iana",
      extensions: ["joda"],
    },
  ],
  [
    "application/vnd.kahootz",
    {
      source: "iana",
      extensions: ["ktz", "ktr"],
    },
  ],
  [
    "application/vnd.kde.karbon",
    {
      source: "iana",
      extensions: ["karbon"],
    },
  ],
  [
    "application/vnd.kde.kchart",
    {
      source: "iana",
      extensions: ["chrt"],
    },
  ],
  [
    "application/vnd.kde.kformula",
    {
      source: "iana",
      extensions: ["kfo"],
    },
  ],
  [
    "application/vnd.kde.kivio",
    {
      source: "iana",
      extensions: ["flw"],
    },
  ],
  [
    "application/vnd.kde.kontour",
    {
      source: "iana",
      extensions: ["kon"],
    },
  ],
  [
    "application/vnd.kde.kpresenter",
    {
      source: "iana",
      extensions: ["kpr", "kpt"],
    },
  ],
  [
    "application/vnd.kde.kspread",
    {
      source: "iana",
      extensions: ["ksp"],
    },
  ],
  [
    "application/vnd.kde.kword",
    {
      source: "iana",
      extensions: ["kwd", "kwt"],
    },
  ],
  [
    "application/vnd.kenameaapp",
    {
      source: "iana",
      extensions: ["htke"],
    },
  ],
  [
    "application/vnd.kidspiration",
    {
      source: "iana",
      extensions: ["kia"],
    },
  ],
  [
    "application/vnd.kinar",
    {
      source: "iana",
      extensions: ["kne", "knp"],
    },
  ],
  [
    "application/vnd.koan",
    {
      source: "iana",
      extensions: ["skp", "skd", "skt", "skm"],
    },
  ],
  [
    "application/vnd.kodak-descriptor",
    {
      source: "iana",
      extensions: ["sse"],
    },
  ],
  [
    "application/vnd.las.las+xml",
    {
      source: "iana",
      extensions: ["lasxml"],
    },
  ],
  [
    "application/vnd.llamagraphics.life-balance.desktop",
    {
      source: "iana",
      extensions: ["lbd"],
    },
  ],
  [
    "application/vnd.llamagraphics.life-balance.exchange+xml",
    {
      source: "iana",
      extensions: ["lbe"],
    },
  ],
  [
    "application/vnd.lotus-1-2-3",
    {
      source: "iana",
      extensions: ["123"],
    },
  ],
  [
    "application/vnd.lotus-approach",
    {
      source: "iana",
      extensions: ["apr"],
    },
  ],
  [
    "application/vnd.lotus-freelance",
    {
      source: "iana",
      extensions: ["pre"],
    },
  ],
  [
    "application/vnd.lotus-notes",
    {
      source: "iana",
      extensions: ["nsf"],
    },
  ],
  [
    "application/vnd.lotus-organizer",
    {
      source: "iana",
      extensions: ["org"],
    },
  ],
  [
    "application/vnd.lotus-screencam",
    {
      source: "iana",
      extensions: ["scm"],
    },
  ],
  [
    "application/vnd.lotus-wordpro",
    {
      source: "iana",
      extensions: ["lwp"],
    },
  ],
  [
    "application/vnd.macports.portpkg",
    {
      source: "iana",
      extensions: ["portpkg"],
    },
  ],
  [
    "application/vnd.mapbox-vector-tile",
    {
      source: "iana",
      extensions: ["mvt"],
    },
  ],
  [
    "application/vnd.mcd",
    {
      source: "iana",
      extensions: ["mcd"],
    },
  ],
  [
    "application/vnd.medcalcdata",
    {
      source: "iana",
      extensions: ["mc1"],
    },
  ],
  [
    "application/vnd.mediastation.cdkey",
    {
      source: "iana",
      extensions: ["cdkey"],
    },
  ],
  [
    "application/vnd.mfer",
    {
      source: "iana",
      extensions: ["mwf"],
    },
  ],
  [
    "application/vnd.mfmp",
    {
      source: "iana",
      extensions: ["mfm"],
    },
  ],
  [
    "application/vnd.micrografx.flo",
    {
      source: "iana",
      extensions: ["flo"],
    },
  ],
  [
    "application/vnd.micrografx.igx",
    {
      source: "iana",
      extensions: ["igx"],
    },
  ],
  [
    "application/vnd.mif",
    {
      source: "iana",
      extensions: ["mif"],
    },
  ],
  [
    "application/vnd.mobius.daf",
    {
      source: "iana",
      extensions: ["daf"],
    },
  ],
  [
    "application/vnd.mobius.dis",
    {
      source: "iana",
      extensions: ["dis"],
    },
  ],
  [
    "application/vnd.mobius.mbk",
    {
      source: "iana",
      extensions: ["mbk"],
    },
  ],
  [
    "application/vnd.mobius.mqy",
    {
      source: "iana",
      extensions: ["mqy"],
    },
  ],
  [
    "application/vnd.mobius.msl",
    {
      source: "iana",
      extensions: ["msl"],
    },
  ],
  [
    "application/vnd.mobius.plc",
    {
      source: "iana",
      extensions: ["plc"],
    },
  ],
  [
    "application/vnd.mobius.txf",
    {
      source: "iana",
      extensions: ["txf"],
    },
  ],
  [
    "application/vnd.mophun.application",
    {
      source: "iana",
      extensions: ["mpn"],
    },
  ],
  [
    "application/vnd.mophun.certificate",
    {
      source: "iana",
      extensions: ["mpc"],
    },
  ],
  [
    "application/vnd.mozilla.xul+xml",
    {
      source: "iana",
      extensions: ["xul"],
    },
  ],
  [
    "application/vnd.ms-artgalry",
    {
      source: "iana",
      extensions: ["cil"],
    },
  ],
  [
    "application/vnd.ms-cab-compressed",
    {
      source: "iana",
      extensions: ["cab"],
    },
  ],
  [
    "application/vnd.ms-excel",
    {
      source: "iana",
      extensions: ["xls", "xlm", "xla", "xlc", "xlt", "xlw"],
    },
  ],
  [
    "application/vnd.ms-excel.addin.macroenabled.12",
    {
      source: "iana",
      extensions: ["xlam"],
    },
  ],
  [
    "application/vnd.ms-excel.sheet.binary.macroenabled.12",
    {
      source: "iana",
      extensions: ["xlsb"],
    },
  ],
  [
    "application/vnd.ms-excel.sheet.macroenabled.12",
    {
      source: "iana",
      extensions: ["xlsm"],
    },
  ],
  [
    "application/vnd.ms-excel.template.macroenabled.12",
    {
      source: "iana",
      extensions: ["xltm"],
    },
  ],
  [
    "application/vnd.ms-fontobject",
    {
      source: "iana",
      extensions: ["eot"],
    },
  ],
  [
    "application/vnd.ms-htmlhelp",
    {
      source: "iana",
      extensions: ["chm"],
    },
  ],
  [
    "application/vnd.ms-ims",
    {
      source: "iana",
      extensions: ["ims"],
    },
  ],
  [
    "application/vnd.ms-lrm",
    {
      source: "iana",
      extensions: ["lrm"],
    },
  ],
  [
    "application/vnd.ms-officetheme",
    {
      source: "iana",
      extensions: ["thmx"],
    },
  ],
  [
    "application/vnd.ms-pki.seccat",
    {
      source: "apache",
      extensions: ["cat"],
    },
  ],
  [
    "application/vnd.ms-pki.stl",
    {
      source: "apache",
      extensions: ["stl"],
    },
  ],
  [
    "application/vnd.ms-powerpoint",
    {
      source: "iana",
      extensions: ["ppt", "pps", "pot"],
    },
  ],
  [
    "application/vnd.ms-powerpoint.addin.macroenabled.12",
    {
      source: "iana",
      extensions: ["ppam"],
    },
  ],
  [
    "application/vnd.ms-powerpoint.presentation.macroenabled.12",
    {
      source: "iana",
      extensions: ["pptm"],
    },
  ],
  [
    "application/vnd.ms-powerpoint.slide.macroenabled.12",
    {
      source: "iana",
      extensions: ["sldm"],
    },
  ],
  [
    "application/vnd.ms-powerpoint.slideshow.macroenabled.12",
    {
      source: "iana",
      extensions: ["ppsm"],
    },
  ],
  [
    "application/vnd.ms-powerpoint.template.macroenabled.12",
    {
      source: "iana",
      extensions: ["potm"],
    },
  ],
  [
    "application/vnd.ms-project",
    {
      source: "iana",
      extensions: ["mpp", "mpt"],
    },
  ],
  [
    "application/vnd.ms-word.document.macroenabled.12",
    {
      source: "iana",
      extensions: ["docm"],
    },
  ],
  [
    "application/vnd.ms-word.template.macroenabled.12",
    {
      source: "iana",
      extensions: ["dotm"],
    },
  ],
  [
    "application/vnd.ms-works",
    {
      source: "iana",
      extensions: ["wps", "wks", "wcm", "wdb"],
    },
  ],
  [
    "application/vnd.ms-wpl",
    {
      source: "iana",
      extensions: ["wpl"],
    },
  ],
  [
    "application/vnd.ms-xpsdocument",
    {
      source: "iana",
      extensions: ["xps"],
    },
  ],
  [
    "application/vnd.mseq",
    {
      source: "iana",
      extensions: ["mseq"],
    },
  ],
  [
    "application/vnd.musician",
    {
      source: "iana",
      extensions: ["mus"],
    },
  ],
  [
    "application/vnd.muvee.style",
    {
      source: "iana",
      extensions: ["msty"],
    },
  ],
  [
    "application/vnd.mynfc",
    {
      source: "iana",
      extensions: ["taglet"],
    },
  ],
  [
    "application/vnd.neurolanguage.nlu",
    {
      source: "iana",
      extensions: ["nlu"],
    },
  ],
  [
    "application/vnd.nitf",
    {
      source: "iana",
      extensions: ["ntf", "nitf"],
    },
  ],
  [
    "application/vnd.noblenet-directory",
    {
      source: "iana",
      extensions: ["nnd"],
    },
  ],
  [
    "application/vnd.noblenet-sealer",
    {
      source: "iana",
      extensions: ["nns"],
    },
  ],
  [
    "application/vnd.noblenet-web",
    {
      source: "iana",
      extensions: ["nnw"],
    },
  ],
  [
    "application/vnd.nokia.n-gage.ac+xml",
    {
      source: "iana",
      extensions: ["ac"],
    },
  ],
  [
    "application/vnd.nokia.n-gage.data",
    {
      source: "iana",
      extensions: ["ngdat"],
    },
  ],
  [
    "application/vnd.nokia.n-gage.symbian.install",
    {
      source: "iana",
      extensions: ["n-gage"],
    },
  ],
  [
    "application/vnd.nokia.radio-preset",
    {
      source: "iana",
      extensions: ["rpst"],
    },
  ],
  [
    "application/vnd.nokia.radio-presets",
    {
      source: "iana",
      extensions: ["rpss"],
    },
  ],
  [
    "application/vnd.novadigm.edm",
    {
      source: "iana",
      extensions: ["edm"],
    },
  ],
  [
    "application/vnd.novadigm.edx",
    {
      source: "iana",
      extensions: ["edx"],
    },
  ],
  [
    "application/vnd.novadigm.ext",
    {
      source: "iana",
      extensions: ["ext"],
    },
  ],
  [
    "application/vnd.oasis.opendocument.chart",
    {
      source: "iana",
      extensions: ["odc"],
    },
  ],
  [
    "application/vnd.oasis.opendocument.chart-template",
    {
      source: "iana",
      extensions: ["otc"],
    },
  ],
  [
    "application/vnd.oasis.opendocument.database",
    {
      source: "iana",
      extensions: ["odb"],
    },
  ],
  [
    "application/vnd.oasis.opendocument.formula",
    {
      source: "iana",
      extensions: ["odf"],
    },
  ],
  [
    "application/vnd.oasis.opendocument.formula-template",
    {
      source: "iana",
      extensions: ["odft"],
    },
  ],
  [
    "application/vnd.oasis.opendocument.graphics",
    {
      source: "iana",
      extensions: ["odg"],
    },
  ],
  [
    "application/vnd.oasis.opendocument.graphics-template",
    {
      source: "iana",
      extensions: ["otg"],
    },
  ],
  [
    "application/vnd.oasis.opendocument.image",
    {
      source: "iana",
      extensions: ["odi"],
    },
  ],
  [
    "application/vnd.oasis.opendocument.image-template",
    {
      source: "iana",
      extensions: ["oti"],
    },
  ],
  [
    "application/vnd.oasis.opendocument.presentation",
    {
      source: "iana",
      extensions: ["odp"],
    },
  ],
  [
    "application/vnd.oasis.opendocument.presentation-template",
    {
      source: "iana",
      extensions: ["otp"],
    },
  ],
  [
    "application/vnd.oasis.opendocument.spreadsheet",
    {
      source: "iana",
      extensions: ["ods"],
    },
  ],
  [
    "application/vnd.oasis.opendocument.spreadsheet-template",
    {
      source: "iana",
      extensions: ["ots"],
    },
  ],
  [
    "application/vnd.oasis.opendocument.text",
    {
      source: "iana",
      extensions: ["odt"],
    },
  ],
  [
    "application/vnd.oasis.opendocument.text-master",
    {
      source: "iana",
      extensions: ["odm"],
    },
  ],
  [
    "application/vnd.oasis.opendocument.text-template",
    {
      source: "iana",
      extensions: ["ott"],
    },
  ],
  [
    "application/vnd.oasis.opendocument.text-web",
    {
      source: "iana",
      extensions: ["oth"],
    },
  ],
  [
    "application/vnd.olpc-sugar",
    {
      source: "iana",
      extensions: ["xo"],
    },
  ],
  [
    "application/vnd.oma.dd2+xml",
    {
      source: "iana",
      extensions: ["dd2"],
    },
  ],
  [
    "application/vnd.openblox.game+xml",
    {
      source: "iana",
      extensions: ["obgx"],
    },
  ],
  [
    "application/vnd.openofficeorg.extension",
    {
      source: "apache",
      extensions: ["oxt"],
    },
  ],
  [
    "application/vnd.openstreetmap.data+xml",
    {
      source: "iana",
      extensions: ["osm"],
    },
  ],
  [
    "application/vnd.openxmlformats-officedocument.presentationml.presentation",
    {
      source: "iana",
      extensions: ["pptx"],
    },
  ],
  [
    "application/vnd.openxmlformats-officedocument.presentationml.slide",
    {
      source: "iana",
      extensions: ["sldx"],
    },
  ],
  [
    "application/vnd.openxmlformats-officedocument.presentationml.slideshow",
    {
      source: "iana",
      extensions: ["ppsx"],
    },
  ],
  [
    "application/vnd.openxmlformats-officedocument.presentationml.template",
    {
      source: "iana",
      extensions: ["potx"],
    },
  ],
  [
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    {
      source: "iana",
      extensions: ["xlsx"],
    },
  ],
  [
    "application/vnd.openxmlformats-officedocument.spreadsheetml.template",
    {
      source: "iana",
      extensions: ["xltx"],
    },
  ],
  [
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    {
      source: "iana",
      extensions: ["docx"],
    },
  ],
  [
    "application/vnd.openxmlformats-officedocument.wordprocessingml.template",
    {
      source: "iana",
      extensions: ["dotx"],
    },
  ],
  [
    "application/vnd.osgeo.mapguide.package",
    {
      source: "iana",
      extensions: ["mgp"],
    },
  ],
  [
    "application/vnd.osgi.dp",
    {
      source: "iana",
      extensions: ["dp"],
    },
  ],
  [
    "application/vnd.osgi.subsystem",
    {
      source: "iana",
      extensions: ["esa"],
    },
  ],
  [
    "application/vnd.palm",
    {
      source: "iana",
      extensions: ["pdb", "pqa", "oprc"],
    },
  ],
  [
    "application/vnd.pawaafile",
    {
      source: "iana",
      extensions: ["paw"],
    },
  ],
  [
    "application/vnd.pg.format",
    {
      source: "iana",
      extensions: ["str"],
    },
  ],
  [
    "application/vnd.pg.osasli",
    {
      source: "iana",
      extensions: ["ei6"],
    },
  ],
  [
    "application/vnd.picsel",
    {
      source: "iana",
      extensions: ["efif"],
    },
  ],
  [
    "application/vnd.pmi.widget",
    {
      source: "iana",
      extensions: ["wg"],
    },
  ],
  [
    "application/vnd.pocketlearn",
    {
      source: "iana",
      extensions: ["plf"],
    },
  ],
  [
    "application/vnd.powerbuilder6",
    {
      source: "iana",
      extensions: ["pbd"],
    },
  ],
  [
    "application/vnd.previewsystems.box",
    {
      source: "iana",
      extensions: ["box"],
    },
  ],
  [
    "application/vnd.proteus.magazine",
    {
      source: "iana",
      extensions: ["mgz"],
    },
  ],
  [
    "application/vnd.publishare-delta-tree",
    {
      source: "iana",
      extensions: ["qps"],
    },
  ],
  [
    "application/vnd.pvi.ptid1",
    {
      source: "iana",
      extensions: ["ptid"],
    },
  ],
  [
    "application/vnd.quark.quarkxpress",
    {
      source: "iana",
      extensions: ["qxd", "qxt", "qwd", "qwt", "qxl", "qxb"],
    },
  ],
  [
    "application/vnd.rar",
    {
      source: "iana",
      extensions: ["rar"],
    },
  ],
  [
    "application/vnd.realvnc.bed",
    {
      source: "iana",
      extensions: ["bed"],
    },
  ],
  [
    "application/vnd.recordare.musicxml",
    {
      source: "iana",
      extensions: ["mxl"],
    },
  ],
  [
    "application/vnd.recordare.musicxml+xml",
    {
      source: "iana",
      extensions: ["musicxml"],
    },
  ],
  [
    "application/vnd.rig.cryptonote",
    {
      source: "iana",
      extensions: ["cryptonote"],
    },
  ],
  [
    "application/vnd.rim.cod",
    {
      source: "apache",
      extensions: ["cod"],
    },
  ],
  [
    "application/vnd.rn-realmedia",
    {
      source: "apache",
      extensions: ["rm"],
    },
  ],
  [
    "application/vnd.rn-realmedia-vbr",
    {
      source: "apache",
      extensions: ["rmvb"],
    },
  ],
  [
    "application/vnd.route66.link66+xml",
    {
      source: "iana",
      extensions: ["link66"],
    },
  ],
  [
    "application/vnd.sailingtracker.track",
    {
      source: "iana",
      extensions: ["st"],
    },
  ],
  [
    "application/vnd.seemail",
    {
      source: "iana",
      extensions: ["see"],
    },
  ],
  [
    "application/vnd.sema",
    {
      source: "iana",
      extensions: ["sema"],
    },
  ],
  [
    "application/vnd.semd",
    {
      source: "iana",
      extensions: ["semd"],
    },
  ],
  [
    "application/vnd.semf",
    {
      source: "iana",
      extensions: ["semf"],
    },
  ],
  [
    "application/vnd.shana.informed.formdata",
    {
      source: "iana",
      extensions: ["ifm"],
    },
  ],
  [
    "application/vnd.shana.informed.formtemplate",
    {
      source: "iana",
      extensions: ["itp"],
    },
  ],
  [
    "application/vnd.shana.informed.interchange",
    {
      source: "iana",
      extensions: ["iif"],
    },
  ],
  [
    "application/vnd.shana.informed.package",
    {
      source: "iana",
      extensions: ["ipk"],
    },
  ],
  [
    "application/vnd.simtech-mindmapper",
    {
      source: "iana",
      extensions: ["twd", "twds"],
    },
  ],
  [
    "application/vnd.smaf",
    {
      source: "iana",
      extensions: ["mmf"],
    },
  ],
  [
    "application/vnd.smart.teacher",
    {
      source: "iana",
      extensions: ["teacher"],
    },
  ],
  [
    "application/vnd.software602.filler.form+xml",
    {
      source: "iana",
      extensions: ["fo"],
    },
  ],
  [
    "application/vnd.solent.sdkm+xml",
    {
      source: "iana",
      extensions: ["sdkm", "sdkd"],
    },
  ],
  [
    "application/vnd.spotfire.dxp",
    {
      source: "iana",
      extensions: ["dxp"],
    },
  ],
  [
    "application/vnd.spotfire.sfs",
    {
      source: "iana",
      extensions: ["sfs"],
    },
  ],
  [
    "application/vnd.stardivision.calc",
    {
      source: "apache",
      extensions: ["sdc"],
    },
  ],
  [
    "application/vnd.stardivision.draw",
    {
      source: "apache",
      extensions: ["sda"],
    },
  ],
  [
    "application/vnd.stardivision.impress",
    {
      source: "apache",
      extensions: ["sdd"],
    },
  ],
  [
    "application/vnd.stardivision.math",
    {
      source: "apache",
      extensions: ["smf"],
    },
  ],
  [
    "application/vnd.stardivision.writer",
    {
      source: "apache",
      extensions: ["sdw", "vor"],
    },
  ],
  [
    "application/vnd.stardivision.writer-global",
    {
      source: "apache",
      extensions: ["sgl"],
    },
  ],
  [
    "application/vnd.stepmania.package",
    {
      source: "iana",
      extensions: ["smzip"],
    },
  ],
  [
    "application/vnd.stepmania.stepchart",
    {
      source: "iana",
      extensions: ["sm"],
    },
  ],
  [
    "application/vnd.sun.wadl+xml",
    {
      source: "iana",
      extensions: ["wadl"],
    },
  ],
  [
    "application/vnd.sun.xml.calc",
    {
      source: "apache",
      extensions: ["sxc"],
    },
  ],
  [
    "application/vnd.sun.xml.calc.template",
    {
      source: "apache",
      extensions: ["stc"],
    },
  ],
  [
    "application/vnd.sun.xml.draw",
    {
      source: "apache",
      extensions: ["sxd"],
    },
  ],
  [
    "application/vnd.sun.xml.draw.template",
    {
      source: "apache",
      extensions: ["std"],
    },
  ],
  [
    "application/vnd.sun.xml.impress",
    {
      source: "apache",
      extensions: ["sxi"],
    },
  ],
  [
    "application/vnd.sun.xml.impress.template",
    {
      source: "apache",
      extensions: ["sti"],
    },
  ],
  [
    "application/vnd.sun.xml.math",
    {
      source: "apache",
      extensions: ["sxm"],
    },
  ],
  [
    "application/vnd.sun.xml.writer",
    {
      source: "apache",
      extensions: ["sxw"],
    },
  ],
  [
    "application/vnd.sun.xml.writer.global",
    {
      source: "apache",
      extensions: ["sxg"],
    },
  ],
  [
    "application/vnd.sun.xml.writer.template",
    {
      source: "apache",
      extensions: ["stw"],
    },
  ],
  [
    "application/vnd.sus-calendar",
    {
      source: "iana",
      extensions: ["sus", "susp"],
    },
  ],
  [
    "application/vnd.svd",
    {
      source: "iana",
      extensions: ["svd"],
    },
  ],
  [
    "application/vnd.symbian.install",
    {
      source: "apache",
      extensions: ["sis", "sisx"],
    },
  ],
  [
    "application/vnd.syncml+xml",
    {
      source: "iana",
      charset: "UTF-8",
      extensions: ["xsm"],
    },
  ],
  [
    "application/vnd.syncml.dm+wbxml",
    {
      source: "iana",
      charset: "UTF-8",
      extensions: ["bdm"],
    },
  ],
  [
    "application/vnd.syncml.dm+xml",
    {
      source: "iana",
      charset: "UTF-8",
      extensions: ["xdm"],
    },
  ],
  [
    "application/vnd.syncml.dmddf+xml",
    {
      source: "iana",
      charset: "UTF-8",
      extensions: ["ddf"],
    },
  ],
  [
    "application/vnd.tao.intent-module-archive",
    {
      source: "iana",
      extensions: ["tao"],
    },
  ],
  [
    "application/vnd.tcpdump.pcap",
    {
      source: "iana",
      extensions: ["pcap", "cap", "dmp"],
    },
  ],
  [
    "application/vnd.tmobile-livetv",
    {
      source: "iana",
      extensions: ["tmo"],
    },
  ],
  [
    "application/vnd.trid.tpt",
    {
      source: "iana",
      extensions: ["tpt"],
    },
  ],
  [
    "application/vnd.triscape.mxs",
    {
      source: "iana",
      extensions: ["mxs"],
    },
  ],
  [
    "application/vnd.trueapp",
    {
      source: "iana",
      extensions: ["tra"],
    },
  ],
  [
    "application/vnd.ufdl",
    {
      source: "iana",
      extensions: ["ufd", "ufdl"],
    },
  ],
  [
    "application/vnd.uiq.theme",
    {
      source: "iana",
      extensions: ["utz"],
    },
  ],
  [
    "application/vnd.umajin",
    {
      source: "iana",
      extensions: ["umj"],
    },
  ],
  [
    "application/vnd.unity",
    {
      source: "iana",
      extensions: ["unityweb"],
    },
  ],
  [
    "application/vnd.uoml+xml",
    {
      source: "iana",
      extensions: ["uoml"],
    },
  ],
  [
    "application/vnd.vcx",
    {
      source: "iana",
      extensions: ["vcx"],
    },
  ],
  [
    "application/vnd.visio",
    {
      source: "iana",
      extensions: ["vsd", "vst", "vss", "vsw"],
    },
  ],
  [
    "application/vnd.visionary",
    {
      source: "iana",
      extensions: ["vis"],
    },
  ],
  [
    "application/vnd.vsf",
    {
      source: "iana",
      extensions: ["vsf"],
    },
  ],
  [
    "application/vnd.wap.wbxml",
    {
      source: "iana",
      charset: "UTF-8",
      extensions: ["wbxml"],
    },
  ],
  [
    "application/vnd.wap.wmlc",
    {
      source: "iana",
      extensions: ["wmlc"],
    },
  ],
  [
    "application/vnd.wap.wmlscriptc",
    {
      source: "iana",
      extensions: ["wmlsc"],
    },
  ],
  [
    "application/vnd.webturbo",
    {
      source: "iana",
      extensions: ["wtb"],
    },
  ],
  [
    "application/vnd.wolfram.player",
    {
      source: "iana",
      extensions: ["nbp"],
    },
  ],
  [
    "application/vnd.wordperfect",
    {
      source: "iana",
      extensions: ["wpd"],
    },
  ],
  [
    "application/vnd.wqd",
    {
      source: "iana",
      extensions: ["wqd"],
    },
  ],
  [
    "application/vnd.wt.stf",
    {
      source: "iana",
      extensions: ["stf"],
    },
  ],
  [
    "application/vnd.xara",
    {
      source: "iana",
      extensions: ["xar"],
    },
  ],
  [
    "application/vnd.xfdl",
    {
      source: "iana",
      extensions: ["xfdl"],
    },
  ],
  [
    "application/vnd.yamaha.hv-dic",
    {
      source: "iana",
      extensions: ["hvd"],
    },
  ],
  [
    "application/vnd.yamaha.hv-script",
    {
      source: "iana",
      extensions: ["hvs"],
    },
  ],
  [
    "application/vnd.yamaha.hv-voice",
    {
      source: "iana",
      extensions: ["hvp"],
    },
  ],
  [
    "application/vnd.yamaha.openscoreformat",
    {
      source: "iana",
      extensions: ["osf"],
    },
  ],
  [
    "application/vnd.yamaha.openscoreformat.osfpvg+xml",
    {
      source: "iana",
      extensions: ["osfpvg"],
    },
  ],
  [
    "application/vnd.yamaha.smaf-audio",
    {
      source: "iana",
      extensions: ["saf"],
    },
  ],
  [
    "application/vnd.yamaha.smaf-phrase",
    {
      source: "iana",
      extensions: ["spf"],
    },
  ],
  [
    "application/vnd.yellowriver-custom-menu",
    {
      source: "iana",
      extensions: ["cmp"],
    },
  ],
  [
    "application/vnd.zul",
    {
      source: "iana",
      extensions: ["zir", "zirz"],
    },
  ],
  [
    "application/vnd.zzazz.deck+xml",
    {
      source: "iana",
      extensions: ["zaz"],
    },
  ],
  [
    "application/voicexml+xml",
    {
      source: "iana",
      extensions: ["vxml"],
    },
  ],
  [
    "application/wasm",
    {
      source: "iana",
      extensions: ["wasm"],
    },
  ],
  [
    "application/watcherinfo+xml",
    {
      source: "iana",
      extensions: ["wif"],
    },
  ],
  [
    "application/widget",
    {
      source: "iana",
      extensions: ["wgt"],
    },
  ],
  [
    "application/winhlp",
    {
      source: "apache",
      extensions: ["hlp"],
    },
  ],
  [
    "application/wsdl+xml",
    {
      source: "iana",
      extensions: ["wsdl"],
    },
  ],
  [
    "application/wspolicy+xml",
    {
      source: "iana",
      extensions: ["wspolicy"],
    },
  ],
  [
    "application/x-7z-compressed",
    {
      source: "apache",
      extensions: ["7z"],
    },
  ],
  [
    "application/x-abiword",
    {
      source: "apache",
      extensions: ["abw"],
    },
  ],
  [
    "application/x-ace-compressed",
    {
      source: "apache",
      extensions: ["ace"],
    },
  ],
  [
    "application/x-apple-diskimage",
    {
      source: "apache",
      extensions: ["dmg"],
    },
  ],
  [
    "application/x-authorware-bin",
    {
      source: "apache",
      extensions: ["aab", "x32", "u32", "vox"],
    },
  ],
  [
    "application/x-authorware-map",
    {
      source: "apache",
      extensions: ["aam"],
    },
  ],
  [
    "application/x-authorware-seg",
    {
      source: "apache",
      extensions: ["aas"],
    },
  ],
  [
    "application/x-bcpio",
    {
      source: "apache",
      extensions: ["bcpio"],
    },
  ],
  [
    "application/x-bittorrent",
    {
      source: "apache",
      extensions: ["torrent"],
    },
  ],
  [
    "application/x-blorb",
    {
      source: "apache",
      extensions: ["blb", "blorb"],
    },
  ],
  [
    "application/x-bzip",
    {
      source: "apache",
      extensions: ["bz"],
    },
  ],
  [
    "application/x-bzip2",
    {
      source: "apache",
      extensions: ["bz2", "boz"],
    },
  ],
  [
    "application/x-cbr",
    {
      source: "apache",
      extensions: ["cbr", "cba", "cbt", "cbz", "cb7"],
    },
  ],
  [
    "application/x-cdlink",
    {
      source: "apache",
      extensions: ["vcd"],
    },
  ],
  [
    "application/x-cfs-compressed",
    {
      source: "apache",
      extensions: ["cfs"],
    },
  ],
  [
    "application/x-chat",
    {
      source: "apache",
      extensions: ["chat"],
    },
  ],
  [
    "application/x-chess-pgn",
    {
      source: "apache",
      extensions: ["pgn"],
    },
  ],
  [
    "application/x-cocoa",
    {
      source: "nginx",
      extensions: ["cco"],
    },
  ],
  [
    "application/x-conference",
    {
      source: "apache",
      extensions: ["nsc"],
    },
  ],
  [
    "application/x-cpio",
    {
      source: "apache",
      extensions: ["cpio"],
    },
  ],
  [
    "application/x-csh",
    {
      source: "apache",
      extensions: ["csh"],
    },
  ],
  [
    "application/x-debian-package",
    {
      source: "apache",
      extensions: ["deb", "udeb"],
    },
  ],
  [
    "application/x-dgc-compressed",
    {
      source: "apache",
      extensions: ["dgc"],
    },
  ],
  [
    "application/x-director",
    {
      source: "apache",
      extensions: [
        "dir",
        "dcr",
        "dxr",
        "cst",
        "cct",
        "cxt",
        "w3d",
        "fgd",
        "swa",
      ],
    },
  ],
  [
    "application/x-doom",
    {
      source: "apache",
      extensions: ["wad"],
    },
  ],
  [
    "application/x-dtbncx+xml",
    {
      source: "apache",
      extensions: ["ncx"],
    },
  ],
  [
    "application/x-dtbook+xml",
    {
      source: "apache",
      extensions: ["dtb"],
    },
  ],
  [
    "application/x-dtbresource+xml",
    {
      source: "apache",
      extensions: ["res"],
    },
  ],
  [
    "application/x-dvi",
    {
      source: "apache",
      extensions: ["dvi"],
    },
  ],
  [
    "application/x-envoy",
    {
      source: "apache",
      extensions: ["evy"],
    },
  ],
  [
    "application/x-eva",
    {
      source: "apache",
      extensions: ["eva"],
    },
  ],
  [
    "application/x-font-bdf",
    {
      source: "apache",
      extensions: ["bdf"],
    },
  ],
  [
    "application/x-font-ghostscript",
    {
      source: "apache",
      extensions: ["gsf"],
    },
  ],
  [
    "application/x-font-linux-psf",
    {
      source: "apache",
      extensions: ["psf"],
    },
  ],
  [
    "application/x-font-pcf",
    {
      source: "apache",
      extensions: ["pcf"],
    },
  ],
  [
    "application/x-font-snf",
    {
      source: "apache",
      extensions: ["snf"],
    },
  ],
  [
    "application/x-font-type1",
    {
      source: "apache",
      extensions: ["pfa", "pfb", "pfm", "afm"],
    },
  ],
  [
    "application/x-freearc",
    {
      source: "apache",
      extensions: ["arc"],
    },
  ],
  [
    "application/x-futuresplash",
    {
      source: "apache",
      extensions: ["spl"],
    },
  ],
  [
    "application/x-gca-compressed",
    {
      source: "apache",
      extensions: ["gca"],
    },
  ],
  [
    "application/x-glulx",
    {
      source: "apache",
      extensions: ["ulx"],
    },
  ],
  [
    "application/x-gnumeric",
    {
      source: "apache",
      extensions: ["gnumeric"],
    },
  ],
  [
    "application/x-gramps-xml",
    {
      source: "apache",
      extensions: ["gramps"],
    },
  ],
  [
    "application/x-gtar",
    {
      source: "apache",
      extensions: ["gtar"],
    },
  ],
  [
    "application/x-hdf",
    {
      source: "apache",
      extensions: ["hdf"],
    },
  ],
  [
    "application/x-install-instructions",
    {
      source: "apache",
      extensions: ["install"],
    },
  ],
  [
    "application/x-iso9660-image",
    {
      source: "apache",
      extensions: ["iso"],
    },
  ],
  [
    "application/x-java-archive-diff",
    {
      source: "nginx",
      extensions: ["jardiff"],
    },
  ],
  [
    "application/x-java-jnlp-file",
    {
      source: "apache",
      extensions: ["jnlp"],
    },
  ],
  [
    "application/x-latex",
    {
      source: "apache",
      extensions: ["latex"],
    },
  ],
  [
    "application/x-lzh-compressed",
    {
      source: "apache",
      extensions: ["lzh", "lha"],
    },
  ],
  [
    "application/x-makeself",
    {
      source: "nginx",
      extensions: ["run"],
    },
  ],
  [
    "application/x-mie",
    {
      source: "apache",
      extensions: ["mie"],
    },
  ],
  [
    "application/x-mobipocket-ebook",
    {
      source: "apache",
      extensions: ["prc", "mobi"],
    },
  ],
  [
    "application/x-ms-application",
    {
      source: "apache",
      extensions: ["application"],
    },
  ],
  [
    "application/x-ms-shortcut",
    {
      source: "apache",
      extensions: ["lnk"],
    },
  ],
  [
    "application/x-ms-wmd",
    {
      source: "apache",
      extensions: ["wmd"],
    },
  ],
  [
    "application/x-ms-wmz",
    {
      source: "apache",
      extensions: ["wmz"],
    },
  ],
  [
    "application/x-ms-xbap",
    {
      source: "apache",
      extensions: ["xbap"],
    },
  ],
  [
    "application/x-msaccess",
    {
      source: "apache",
      extensions: ["mdb"],
    },
  ],
  [
    "application/x-msbinder",
    {
      source: "apache",
      extensions: ["obd"],
    },
  ],
  [
    "application/x-mscardfile",
    {
      source: "apache",
      extensions: ["crd"],
    },
  ],
  [
    "application/x-msclip",
    {
      source: "apache",
      extensions: ["clp"],
    },
  ],
  [
    "application/x-msdownload",
    {
      source: "apache",
      extensions: ["exe", "dll", "com", "bat", "msi"],
    },
  ],
  [
    "application/x-msmediaview",
    {
      source: "apache",
      extensions: ["mvb", "m13", "m14"],
    },
  ],
  [
    "application/x-msmetafile",
    {
      source: "apache",
      extensions: ["wmf", "wmz", "emf", "emz"],
    },
  ],
  [
    "application/x-msmoney",
    {
      source: "apache",
      extensions: ["mny"],
    },
  ],
  [
    "application/x-mspublisher",
    {
      source: "apache",
      extensions: ["pub"],
    },
  ],
  [
    "application/x-msschedule",
    {
      source: "apache",
      extensions: ["scd"],
    },
  ],
  [
    "application/x-msterminal",
    {
      source: "apache",
      extensions: ["trm"],
    },
  ],
  [
    "application/x-mswrite",
    {
      source: "apache",
      extensions: ["wri"],
    },
  ],
  [
    "application/x-netcdf",
    {
      source: "apache",
      extensions: ["nc", "cdf"],
    },
  ],
  [
    "application/x-nzb",
    {
      source: "apache",
      extensions: ["nzb"],
    },
  ],
  [
    "application/x-perl",
    {
      source: "nginx",
      extensions: ["pl", "pm"],
    },
  ],
  [
    "application/x-pilot",
    {
      source: "nginx",
      extensions: ["prc", "pdb"],
    },
  ],
  [
    "application/x-pkcs12",
    {
      source: "apache",
      extensions: ["p12", "pfx"],
    },
  ],
  [
    "application/x-pkcs7-certificates",
    {
      source: "apache",
      extensions: ["p7b", "spc"],
    },
  ],
  [
    "application/x-pkcs7-certreqresp",
    {
      source: "apache",
      extensions: ["p7r"],
    },
  ],
  [
    "application/x-rar-compressed",
    {
      source: "apache",
      extensions: ["rar"],
    },
  ],
  [
    "application/x-redhat-package-manager",
    {
      source: "nginx",
      extensions: ["rpm"],
    },
  ],
  [
    "application/x-research-info-systems",
    {
      source: "apache",
      extensions: ["ris"],
    },
  ],
  [
    "application/x-sea",
    {
      source: "nginx",
      extensions: ["sea"],
    },
  ],
  [
    "application/x-sh",
    {
      source: "apache",
      extensions: ["sh"],
    },
  ],
  [
    "application/x-shar",
    {
      source: "apache",
      extensions: ["shar"],
    },
  ],
  [
    "application/x-shockwave-flash",
    {
      source: "apache",
      extensions: ["swf"],
    },
  ],
  [
    "application/x-silverlight-app",
    {
      source: "apache",
      extensions: ["xap"],
    },
  ],
  [
    "application/x-sql",
    {
      source: "apache",
      extensions: ["sql"],
    },
  ],
  [
    "application/x-stuffit",
    {
      source: "apache",
      extensions: ["sit"],
    },
  ],
  [
    "application/x-stuffitx",
    {
      source: "apache",
      extensions: ["sitx"],
    },
  ],
  [
    "application/x-subrip",
    {
      source: "apache",
      extensions: ["srt"],
    },
  ],
  [
    "application/x-sv4cpio",
    {
      source: "apache",
      extensions: ["sv4cpio"],
    },
  ],
  [
    "application/x-sv4crc",
    {
      source: "apache",
      extensions: ["sv4crc"],
    },
  ],
  [
    "application/x-t3vm-image",
    {
      source: "apache",
      extensions: ["t3"],
    },
  ],
  [
    "application/x-tads",
    {
      source: "apache",
      extensions: ["gam"],
    },
  ],
  [
    "application/x-tar",
    {
      source: "apache",
      extensions: ["tar"],
    },
  ],
  [
    "application/x-tcl",
    {
      source: "apache",
      extensions: ["tcl", "tk"],
    },
  ],
  [
    "application/x-tex",
    {
      source: "apache",
      extensions: ["tex"],
    },
  ],
  [
    "application/x-tex-tfm",
    {
      source: "apache",
      extensions: ["tfm"],
    },
  ],
  [
    "application/x-texinfo",
    {
      source: "apache",
      extensions: ["texinfo", "texi"],
    },
  ],
  [
    "application/x-tgif",
    {
      source: "apache",
      extensions: ["obj"],
    },
  ],
  [
    "application/x-ustar",
    {
      source: "apache",
      extensions: ["ustar"],
    },
  ],
  [
    "application/x-wais-source",
    {
      source: "apache",
      extensions: ["src"],
    },
  ],
  [
    "application/x-x509-ca-cert",
    {
      source: "iana",
      extensions: ["der", "crt", "pem"],
    },
  ],
  [
    "application/x-xfig",
    {
      source: "apache",
      extensions: ["fig"],
    },
  ],
  [
    "application/x-xliff+xml",
    {
      source: "apache",
      extensions: ["xlf"],
    },
  ],
  [
    "application/x-xpinstall",
    {
      source: "apache",
      extensions: ["xpi"],
    },
  ],
  [
    "application/x-xz",
    {
      source: "apache",
      extensions: ["xz"],
    },
  ],
  [
    "application/x-zmachine",
    {
      source: "apache",
      extensions: ["z1", "z2", "z3", "z4", "z5", "z6", "z7", "z8"],
    },
  ],
  [
    "application/xaml+xml",
    {
      source: "apache",
      extensions: ["xaml"],
    },
  ],
  [
    "application/xcap-att+xml",
    {
      source: "iana",
      extensions: ["xav"],
    },
  ],
  [
    "application/xcap-caps+xml",
    {
      source: "iana",
      extensions: ["xca"],
    },
  ],
  [
    "application/xcap-diff+xml",
    {
      source: "iana",
      extensions: ["xdf"],
    },
  ],
  [
    "application/xcap-el+xml",
    {
      source: "iana",
      extensions: ["xel"],
    },
  ],
  [
    "application/xcap-ns+xml",
    {
      source: "iana",
      extensions: ["xns"],
    },
  ],
  [
    "application/xenc+xml",
    {
      source: "iana",
      extensions: ["xenc"],
    },
  ],
  [
    "application/xhtml+xml",
    {
      source: "iana",
      extensions: ["xhtml", "xht"],
    },
  ],
  [
    "application/xliff+xml",
    {
      source: "iana",
      extensions: ["xlf"],
    },
  ],
  [
    "application/xml",
    {
      source: "iana",
      extensions: ["xml", "xsl", "xsd", "rng"],
    },
  ],
  [
    "application/xml-dtd",
    {
      source: "iana",
      extensions: ["dtd"],
    },
  ],
  [
    "application/xop+xml",
    {
      source: "iana",
      extensions: ["xop"],
    },
  ],
  [
    "application/xproc+xml",
    {
      source: "apache",
      extensions: ["xpl"],
    },
  ],
  [
    "application/xslt+xml",
    {
      source: "iana",
      extensions: ["xsl", "xslt"],
    },
  ],
  [
    "application/xspf+xml",
    {
      source: "apache",
      extensions: ["xspf"],
    },
  ],
  [
    "application/xv+xml",
    {
      source: "iana",
      extensions: ["mxml", "xhvml", "xvml", "xvm"],
    },
  ],
  [
    "application/yaml",
    {
      source: "iana",
      extensions: ["yaml", "yml"],
    },
  ],
  [
    "application/yang",
    {
      source: "iana",
      extensions: ["yang"],
    },
  ],
  [
    "application/yin+xml",
    {
      source: "iana",
      extensions: ["yin"],
    },
  ],
  [
    "application/zip",
    {
      source: "iana",
      extensions: ["zip"],
    },
  ],
]);

// Make the object immutable beyond this point
const mimes = Object.freeze([
  "chemical/x-cdx",
  "chemical/x-cif",
  "chemical/x-cmdf",
  "chemical/x-cml",
  "chemical/x-csml",
  "chemical/x-xyz",
  "font/collection",
  "font/otf",
  "font/ttf",
  "font/woff",
  "font/woff2",
  "message/disposition-notification",
  "message/global",
  "message/global-delivery-status",
  "message/global-disposition-notification",
  "message/global-headers",
  "message/rfc822",
  "message/vnd.wfa.wsc",
  "model/3mf",
  "model/gltf+json",
  "model/gltf-binary",
  "model/iges",
  "model/mesh",
  "model/mtl",
  "model/obj",
  "model/step",
  "model/step+xml",
  "model/step+zip",
  "model/step-xml+zip",
  "model/stl",
  "model/vnd.collada+xml",
  "model/vnd.dwf",
  "model/vnd.gdl",
  "model/vnd.gtw",
  "model/vnd.mts",
  "model/vnd.opengex",
  "model/vnd.parasolid.transmit.binary",
  "model/vnd.parasolid.transmit.text",
  "model/vnd.sap.vds",
  "model/vnd.usdz+zip",
  "model/vnd.valve.source.compiled-map",
  "model/vnd.vtu",
  "model/vrml",
  "model/x3d+binary",
  "model/x3d+fastinfoset",
  "model/x3d+vrml",
  "model/x3d+xml",
  "model/x3d-vrml",
  "x-conference/x-cooltalk",
  "video/3gpp",
  "video/3gpp2",
  "video/h261",
  "video/h263",
  "video/h264",
  "video/iso.segment",
  "video/jpeg",
  "video/jpm",
  "video/mj2",
  "video/mp2t",
  "video/mp4",
  "video/mpeg",
  "video/ogg",
  "video/quicktime",
  "video/vnd.dece.hd",
  "video/vnd.dece.mobile",
  "video/vnd.dece.pd",
  "video/vnd.dece.sd",
  "video/vnd.dece.video",
  "video/vnd.dvb.file",
  "video/vnd.fvt",
  "video/vnd.mpegurl",
  "video/vnd.ms-playready.media.pyv",
  "video/vnd.uvvu.mp4",
  "video/vnd.vivo",
  "video/webm",
  "video/x-f4v",
  "video/x-fli",
  "video/x-flv",
  "video/x-m4v",
  "video/x-matroska",
  "video/x-mng",
  "video/x-ms-asf",
  "video/x-ms-vob",
  "video/x-ms-wm",
  "video/x-ms-wmv",
  "video/x-ms-wmx",
  "video/x-ms-wvx",
  "video/x-msvideo",
  "video/x-sgi-movie",
  "video/x-smv",
  "text/cache-manifest",
  "text/calendar",
  "text/css",
  "text/csv",
  "text/html",
  "text/markdown",
  "text/mathml",
  "text/n3",
  "text/plain",
  "text/prs.lines.tag",
  "text/richtext",
  "text/rtf",
  "text/sgml",
  "text/shex",
  "text/spdx",
  "text/tab-separated-values",
  "text/troff",
  "text/turtle",
  "text/uri-list",
  "text/vcard",
  "text/vnd.curl",
  "text/vnd.curl.dcurl",
  "text/vnd.curl.mcurl",
  "text/vnd.curl.scurl",
  "text/vnd.dvb.subtitle",
  "text/vnd.familysearch.gedcom",
  "text/vnd.fly",
  "text/vnd.fmi.flexstor",
  "text/vnd.graphviz",
  "text/vnd.in3d.3dml",
  "text/vnd.in3d.spot",
  "text/vnd.sun.j2me.app-descriptor",
  "text/vnd.wap.wml",
  "text/vnd.wap.wmlscript",
  "text/vtt",
  "text/x-asm",
  "text/x-c",
  "text/x-component",
  "text/x-fortran",
  "text/x-java-source",
  "text/x-nfo",
  "text/x-opml",
  "text/x-pascal",
  "text/x-setext",
  "text/x-sfv",
  "text/x-uuencode",
  "text/x-vcalendar",
  "text/x-vcard",
  "text/xml",
  "image/aces",
  "image/avci",
  "image/avcs",
  "image/avif",
  "image/bmp",
  "image/cgm",
  "image/dicom-rle",
  "image/emf",
  "image/fits",
  "image/g3fax",
  "image/gif",
  "image/heic",
  "image/heic-sequence",
  "image/heif",
  "image/heif-sequence",
  "image/hej2k",
  "image/hsj2",
  "image/ief",
  "image/jls",
  "image/jp2",
  "image/jpeg",
  "image/jph",
  "image/jphc",
  "image/jpm",
  "image/jpx",
  "image/jxr",
  "image/jxra",
  "image/jxrs",
  "image/jxs",
  "image/jxsc",
  "image/jxsi",
  "image/jxss",
  "image/ktx",
  "image/ktx2",
  "image/png",
  "image/prs.btif",
  "image/prs.pti",
  "image/sgi",
  "image/svg+xml",
  "image/t38",
  "image/tiff",
  "image/tiff-fx",
  "image/vnd.adobe.photoshop",
  "image/vnd.airzip.accelerator.azv",
  "image/vnd.dece.graphic",
  "image/vnd.djvu",
  "image/vnd.dvb.subtitle",
  "image/vnd.dwg",
  "image/vnd.dxf",
  "image/vnd.fastbidsheet",
  "image/vnd.fpx",
  "image/vnd.fst",
  "image/vnd.fujixerox.edmics-mmr",
  "image/vnd.fujixerox.edmics-rlc",
  "image/vnd.microsoft.icon",
  "image/vnd.ms-modi",
  "image/vnd.ms-photo",
  "image/vnd.net-fpx",
  "image/vnd.pco.b16",
  "image/vnd.tencent.tap",
  "image/vnd.valve.source.texture",
  "image/vnd.wap.wbmp",
  "image/vnd.xiff",
  "image/vnd.zbrush.pcx",
  "image/webp",
  "image/wmf",
  "image/x-3ds",
  "image/x-cmu-raster",
  "image/x-cmx",
  "image/x-freehand",
  "image/x-icon",
  "image/x-jng",
  "image/x-mrsid-image",
  "image/x-ms-bmp",
  "image/x-pcx",
  "image/x-pict",
  "image/x-portable-anymap",
  "image/x-portable-bitmap",
  "image/x-portable-graymap",
  "image/x-portable-pixmap",
  "image/x-rgb",
  "image/x-tga",
  "image/x-xbitmap",
  "image/x-xpixmap",
  "image/x-xwindowdump",
  "audio/3gpp",
  "audio/adpcm",
  "audio/amr",
  "audio/basic",
  "audio/midi",
  "audio/mobile-xmf",
  "audio/mp4",
  "audio/mpeg",
  "audio/ogg",
  "audio/s3m",
  "audio/silk",
  "audio/vnd.dece.audio",
  "audio/vnd.digital-winds",
  "audio/vnd.dra",
  "audio/vnd.dts",
  "audio/vnd.dts.hd",
  "audio/vnd.lucent.voice",
  "audio/vnd.ms-playready.media.pya",
  "audio/vnd.nuera.ecelp4800",
  "audio/vnd.nuera.ecelp7470",
  "audio/vnd.nuera.ecelp9600",
  "audio/vnd.rip",
  "audio/webm",
  "audio/x-aac",
  "audio/x-aiff",
  "audio/x-caf",
  "audio/x-flac",
  "audio/x-m4a",
  "audio/x-matroska",
  "audio/x-mpegurl",
  "audio/x-ms-wax",
  "audio/x-ms-wma",
  "audio/x-pn-realaudio",
  "audio/x-pn-realaudio-plugin",
  "audio/x-realaudio",
  "audio/x-wav",
  "audio/x-gsm",
  "audio/xm",
  "application/andrew-inset",
  "application/applixware",
  "application/atom+xml",
  "application/atomcat+xml",
  "application/atomdeleted+xml",
  "application/atomsvc+xml",
  "application/atsc-dwd+xml",
  "application/atsc-held+xml",
  "application/atsc-rsat+xml",
  "application/calendar+xml",
  "application/ccxml+xml",
  "application/cdfx+xml",
  "application/cdmi-capability",
  "application/cdmi-container",
  "application/cdmi-domain",
  "application/cdmi-object",
  "application/cdmi-queue",
  "application/cpl+xml",
  "application/cu-seeme",
  "application/dash+xml",
  "application/dash-patch+xml",
  "application/davmount+xml",
  "application/dicom",
  "application/docbook+xml",
  "application/dssc+der",
  "application/dssc+xml",
  "application/ecmascript",
  "application/emma+xml",
  "application/emotionml+xml",
  "application/epub+zip",
  "application/exi",
  "application/express",
  "application/fdt+xml",
  "application/font-tdpfr",
  "application/geo+json",
  "application/gml+xml",
  "application/gpx+xml",
  "application/gxf",
  "application/gzip",
  "application/hyperstudio",
  "application/inkml+xml",
  "application/ipfix",
  "application/its+xml",
  "application/java-archive",
  "application/java-serialized-object",
  "application/java-vm",
  "application/javascript",
  "application/json",
  "application/jsonml+json",
  "application/ld+json",
  "application/lgr+xml",
  "application/lost+xml",
  "application/mac-binhex40",
  "application/mac-compactpro",
  "application/mads+xml",
  "application/manifest+json",
  "application/marc",
  "application/marcxml+xml",
  "application/mathematica",
  "application/mathml+xml",
  "application/mbox",
  "application/media-policy-dataset+xml",
  "application/mediaservercontrol+xml",
  "application/metalink+xml",
  "application/metalink4+xml",
  "application/mets+xml",
  "application/mmt-aei+xml",
  "application/mmt-usd+xml",
  "application/mods+xml",
  "application/mp21",
  "application/mp4",
  "application/msword",
  "application/mxf",
  "application/n-quads",
  "application/n-triples",
  "application/node",
  "application/octet-stream",
  "application/oda",
  "application/oebps-package+xml",
  "application/ogg",
  "application/omdoc+xml",
  "application/onenote",
  "application/oxps",
  "application/p2p-overlay+xml",
  "application/patch-ops-error+xml",
  "application/pdf",
  "application/pgp-encrypted",
  "application/pgp-keys",
  "application/pgp-signature",
  "application/pics-rules",
  "application/pkcs10",
  "application/pkcs7-mime",
  "application/pkcs7-signature",
  "application/pkcs8",
  "application/pkix-attr-cert",
  "application/pkix-cert",
  "application/pkix-crl",
  "application/pkix-pkipath",
  "application/pkixcmp",
  "application/pls+xml",
  "application/postscript",
  "application/provenance+xml",
  "application/prs.cww",
  "application/pskc+xml",
  "application/rdf+xml",
  "application/reginfo+xml",
  "application/relax-ng-compact-syntax",
  "application/resource-lists+xml",
  "application/resource-lists-diff+xml",
  "application/rls-services+xml",
  "application/route-apd+xml",
  "application/route-s-tsid+xml",
  "application/route-usd+xml",
  "application/rpki-ghostbusters",
  "application/rpki-manifest",
  "application/rpki-roa",
  "application/rsd+xml",
  "application/rss+xml",
  "application/rtf",
  "application/sbml+xml",
  "application/scvp-cv-request",
  "application/scvp-cv-response",
  "application/scvp-vp-request",
  "application/scvp-vp-response",
  "application/sdp",
  "application/senml+xml",
  "application/sensml+xml",
  "application/set-payment-initiation",
  "application/set-registration-initiation",
  "application/shf+xml",
  "application/sieve",
  "application/smil+xml",
  "application/sparql-query",
  "application/sparql-results+xml",
  "application/srgs",
  "application/srgs+xml",
  "application/sru+xml",
  "application/ssdl+xml",
  "application/ssml+xml",
  "application/swid+xml",
  "application/tei+xml",
  "application/thraud+xml",
  "application/timestamped-data",
  "application/trig",
  "application/ttml+xml",
  "application/urc-ressheet+xml",
  "application/urc-targetdesc+xml",
  "application/vnd.1000minds.decision-model+xml",
  "application/vnd.3gpp.pic-bw-large",
  "application/vnd.3gpp.pic-bw-small",
  "application/vnd.3gpp.pic-bw-var",
  "application/vnd.3gpp2.tcap",
  "application/vnd.3m.post-it-notes",
  "application/vnd.accpac.simply.aso",
  "application/vnd.accpac.simply.imp",
  "application/vnd.acucobol",
  "application/vnd.acucorp",
  "application/vnd.adobe.air-application-installer-package+zip",
  "application/vnd.adobe.formscentral.fcdt",
  "application/vnd.adobe.fxp",
  "application/vnd.adobe.xdp+xml",
  "application/vnd.adobe.xfdf",
  "application/vnd.age",
  "application/vnd.ahead.space",
  "application/vnd.airzip.filesecure.azf",
  "application/vnd.airzip.filesecure.azs",
  "application/vnd.amazon.ebook",
  "application/vnd.americandynamics.acc",
  "application/vnd.amiga.ami",
  "application/vnd.android.package-archive",
  "application/vnd.anser-web-certificate-issue-initiation",
  "application/vnd.anser-web-funds-transfer-initiation",
  "application/vnd.antix.game-component",
  "application/vnd.apple.installer+xml",
  "application/vnd.apple.keynote",
  "application/vnd.apple.mpegurl",
  "application/vnd.apple.numbers",
  "application/vnd.apple.pages",
  "application/vnd.aristanetworks.swi",
  "application/vnd.astraea-software.iota",
  "application/vnd.audiograph",
  "application/vnd.balsamiq.bmml+xml",
  "application/vnd.blueice.multipass",
  "application/vnd.bmi",
  "application/vnd.businessobjects",
  "application/vnd.chemdraw+xml",
  "application/vnd.chipnuts.karaoke-mmd",
  "application/vnd.cinderella",
  "application/vnd.citationstyles.style+xml",
  "application/vnd.claymore",
  "application/vnd.cloanto.rp9",
  "application/vnd.clonk.c4group",
  "application/vnd.cluetrust.cartomobile-config",
  "application/vnd.cluetrust.cartomobile-config-pkg",
  "application/vnd.commonspace",
  "application/vnd.contact.cmsg",
  "application/vnd.cosmocaller",
  "application/vnd.crick.clicker",
  "application/vnd.crick.clicker.keyboard",
  "application/vnd.crick.clicker.palette",
  "application/vnd.crick.clicker.template",
  "application/vnd.crick.clicker.wordbank",
  "application/vnd.criticaltools.wbs+xml",
  "application/vnd.ctc-posml",
  "application/vnd.cups-ppd",
  "application/vnd.curl.car",
  "application/vnd.curl.pcurl",
  "application/vnd.dart",
  "application/vnd.data-vision.rdz",
  "application/vnd.dbf",
  "application/vnd.dece.data",
  "application/vnd.dece.ttml+xml",
  "application/vnd.dece.unspecified",
  "application/vnd.dece.zip",
  "application/vnd.denovo.fcselayout-link",
  "application/vnd.dna",
  "application/vnd.dolby.mlp",
  "application/vnd.dpgraph",
  "application/vnd.dreamfactory",
  "application/vnd.ds-keypoint",
  "application/vnd.dvb.ait",
  "application/vnd.dvb.service",
  "application/vnd.dynageo",
  "application/vnd.ecowin.chart",
  "application/vnd.enliven",
  "application/vnd.epson.esf",
  "application/vnd.epson.msf",
  "application/vnd.epson.quickanime",
  "application/vnd.epson.salt",
  "application/vnd.epson.ssf",
  "application/vnd.eszigno3+xml",
  "application/vnd.ezpix-album",
  "application/vnd.ezpix-package",
  "application/vnd.fdf",
  "application/vnd.fdsn.mseed",
  "application/vnd.fdsn.seed",
  "application/vnd.flographit",
  "application/vnd.fluxtime.clip",
  "application/vnd.framemaker",
  "application/vnd.frogans.fnc",
  "application/vnd.frogans.ltf",
  "application/vnd.fsc.weblaunch",
  "application/vnd.fujitsu.oasys",
  "application/vnd.fujitsu.oasys2",
  "application/vnd.fujitsu.oasys3",
  "application/vnd.fujitsu.oasysgp",
  "application/vnd.fujitsu.oasysprs",
  "application/vnd.fujixerox.ddd",
  "application/vnd.fujixerox.docuworks",
  "application/vnd.fujixerox.docuworks.binder",
  "application/vnd.fuzzysheet",
  "application/vnd.genomatix.tuxedo",
  "application/vnd.geogebra.file",
  "application/vnd.geogebra.tool",
  "application/vnd.geometry-explorer",
  "application/vnd.geonext",
  "application/vnd.geoplan",
  "application/vnd.geospace",
  "application/vnd.gmx",
  "application/vnd.google-earth.kml+xml",
  "application/vnd.google-earth.kmz",
  "application/vnd.grafeq",
  "application/vnd.groove-account",
  "application/vnd.groove-help",
  "application/vnd.groove-identity-message",
  "application/vnd.groove-injector",
  "application/vnd.groove-tool-message",
  "application/vnd.groove-tool-template",
  "application/vnd.groove-vcard",
  "application/vnd.hal+xml",
  "application/vnd.handheld-entertainment+xml",
  "application/vnd.hbci",
  "application/vnd.hhe.lesson-player",
  "application/vnd.hp-hpgl",
  "application/vnd.hp-hpid",
  "application/vnd.hp-hps",
  "application/vnd.hp-jlyt",
  "application/vnd.hp-pcl",
  "application/vnd.hp-pclxl",
  "application/vnd.hydrostatix.sof-data",
  "application/vnd.ibm.minipay",
  "application/vnd.ibm.modcap",
  "application/vnd.ibm.rights-management",
  "application/vnd.ibm.secure-container",
  "application/vnd.iccprofile",
  "application/vnd.igloader",
  "application/vnd.immervision-ivp",
  "application/vnd.immervision-ivu",
  "application/vnd.insors.igm",
  "application/vnd.intercon.formnet",
  "application/vnd.intergeo",
  "application/vnd.intu.qbo",
  "application/vnd.intu.qfx",
  "application/vnd.ipunplugged.rcprofile",
  "application/vnd.irepository.package+xml",
  "application/vnd.is-xpr",
  "application/vnd.isac.fcs",
  "application/vnd.jam",
  "application/vnd.jcp.javame.midlet-rms",
  "application/vnd.jisp",
  "application/vnd.joost.joda-archive",
  "application/vnd.kahootz",
  "application/vnd.kde.karbon",
  "application/vnd.kde.kchart",
  "application/vnd.kde.kformula",
  "application/vnd.kde.kivio",
  "application/vnd.kde.kontour",
  "application/vnd.kde.kpresenter",
  "application/vnd.kde.kspread",
  "application/vnd.kde.kword",
  "application/vnd.kenameaapp",
  "application/vnd.kidspiration",
  "application/vnd.kinar",
  "application/vnd.koan",
  "application/vnd.kodak-descriptor",
  "application/vnd.las.las+xml",
  "application/vnd.llamagraphics.life-balance.desktop",
  "application/vnd.llamagraphics.life-balance.exchange+xml",
  "application/vnd.lotus-1-2-3",
  "application/vnd.lotus-approach",
  "application/vnd.lotus-freelance",
  "application/vnd.lotus-notes",
  "application/vnd.lotus-organizer",
  "application/vnd.lotus-screencam",
  "application/vnd.lotus-wordpro",
  "application/vnd.macports.portpkg",
  "application/vnd.mapbox-vector-tile",
  "application/vnd.mcd",
  "application/vnd.medcalcdata",
  "application/vnd.mediastation.cdkey",
  "application/vnd.mfer",
  "application/vnd.mfmp",
  "application/vnd.micrografx.flo",
  "application/vnd.micrografx.igx",
  "application/vnd.mif",
  "application/vnd.mobius.daf",
  "application/vnd.mobius.dis",
  "application/vnd.mobius.mbk",
  "application/vnd.mobius.mqy",
  "application/vnd.mobius.msl",
  "application/vnd.mobius.plc",
  "application/vnd.mobius.txf",
  "application/vnd.mophun.application",
  "application/vnd.mophun.certificate",
  "application/vnd.mozilla.xul+xml",
  "application/vnd.ms-artgalry",
  "application/vnd.ms-cab-compressed",
  "application/vnd.ms-excel",
  "application/vnd.ms-excel.addin.macroenabled.12",
  "application/vnd.ms-excel.sheet.binary.macroenabled.12",
  "application/vnd.ms-excel.sheet.macroenabled.12",
  "application/vnd.ms-excel.template.macroenabled.12",
  "application/vnd.ms-fontobject",
  "application/vnd.ms-htmlhelp",
  "application/vnd.ms-ims",
  "application/vnd.ms-lrm",
  "application/vnd.ms-officetheme",
  "application/vnd.ms-pki.seccat",
  "application/vnd.ms-pki.stl",
  "application/vnd.ms-powerpoint",
  "application/vnd.ms-powerpoint.addin.macroenabled.12",
  "application/vnd.ms-powerpoint.presentation.macroenabled.12",
  "application/vnd.ms-powerpoint.slide.macroenabled.12",
  "application/vnd.ms-powerpoint.slideshow.macroenabled.12",
  "application/vnd.ms-powerpoint.template.macroenabled.12",
  "application/vnd.ms-project",
  "application/vnd.ms-word.document.macroenabled.12",
  "application/vnd.ms-word.template.macroenabled.12",
  "application/vnd.ms-works",
  "application/vnd.ms-wpl",
  "application/vnd.ms-xpsdocument",
  "application/vnd.mseq",
  "application/vnd.musician",
  "application/vnd.muvee.style",
  "application/vnd.mynfc",
  "application/vnd.neurolanguage.nlu",
  "application/vnd.nitf",
  "application/vnd.noblenet-directory",
  "application/vnd.noblenet-sealer",
  "application/vnd.noblenet-web",
  "application/vnd.nokia.n-gage.ac+xml",
  "application/vnd.nokia.n-gage.data",
  "application/vnd.nokia.n-gage.symbian.install",
  "application/vnd.nokia.radio-preset",
  "application/vnd.nokia.radio-presets",
  "application/vnd.novadigm.edm",
  "application/vnd.novadigm.edx",
  "application/vnd.novadigm.ext",
  "application/vnd.oasis.opendocument.chart",
  "application/vnd.oasis.opendocument.chart-template",
  "application/vnd.oasis.opendocument.database",
  "application/vnd.oasis.opendocument.formula",
  "application/vnd.oasis.opendocument.formula-template",
  "application/vnd.oasis.opendocument.graphics",
  "application/vnd.oasis.opendocument.graphics-template",
  "application/vnd.oasis.opendocument.image",
  "application/vnd.oasis.opendocument.image-template",
  "application/vnd.oasis.opendocument.presentation",
  "application/vnd.oasis.opendocument.presentation-template",
  "application/vnd.oasis.opendocument.spreadsheet",
  "application/vnd.oasis.opendocument.spreadsheet-template",
  "application/vnd.oasis.opendocument.text",
  "application/vnd.oasis.opendocument.text-master",
  "application/vnd.oasis.opendocument.text-template",
  "application/vnd.oasis.opendocument.text-web",
  "application/vnd.olpc-sugar",
  "application/vnd.oma.dd2+xml",
  "application/vnd.openblox.game+xml",
  "application/vnd.openofficeorg.extension",
  "application/vnd.openstreetmap.data+xml",
  "application/vnd.openxmlformats-officedocument.presentationml.presentation",
  "application/vnd.openxmlformats-officedocument.presentationml.slide",
  "application/vnd.openxmlformats-officedocument.presentationml.slideshow",
  "application/vnd.openxmlformats-officedocument.presentationml.template",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.template",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.template",
  "application/vnd.osgeo.mapguide.package",
  "application/vnd.osgi.dp",
  "application/vnd.osgi.subsystem",
  "application/vnd.palm",
  "application/vnd.pawaafile",
  "application/vnd.pg.format",
  "application/vnd.pg.osasli",
  "application/vnd.picsel",
  "application/vnd.pmi.widget",
  "application/vnd.pocketlearn",
  "application/vnd.powerbuilder6",
  "application/vnd.previewsystems.box",
  "application/vnd.proteus.magazine",
  "application/vnd.publishare-delta-tree",
  "application/vnd.pvi.ptid1",
  "application/vnd.quark.quarkxpress",
  "application/vnd.rar",
  "application/vnd.realvnc.bed",
  "application/vnd.recordare.musicxml",
  "application/vnd.recordare.musicxml+xml",
  "application/vnd.rig.cryptonote",
  "application/vnd.rim.cod",
  "application/vnd.rn-realmedia",
  "application/vnd.rn-realmedia-vbr",
  "application/vnd.route66.link66+xml",
  "application/vnd.sailingtracker.track",
  "application/vnd.seemail",
  "application/vnd.sema",
  "application/vnd.semd",
  "application/vnd.semf",
  "application/vnd.shana.informed.formdata",
  "application/vnd.shana.informed.formtemplate",
  "application/vnd.shana.informed.interchange",
  "application/vnd.shana.informed.package",
  "application/vnd.simtech-mindmapper",
  "application/vnd.smaf",
  "application/vnd.smart.teacher",
  "application/vnd.software602.filler.form+xml",
  "application/vnd.solent.sdkm+xml",
  "application/vnd.spotfire.dxp",
  "application/vnd.spotfire.sfs",
  "application/vnd.stardivision.calc",
  "application/vnd.stardivision.draw",
  "application/vnd.stardivision.impress",
  "application/vnd.stardivision.math",
  "application/vnd.stardivision.writer",
  "application/vnd.stardivision.writer-global",
  "application/vnd.stepmania.package",
  "application/vnd.stepmania.stepchart",
  "application/vnd.sun.wadl+xml",
  "application/vnd.sun.xml.calc",
  "application/vnd.sun.xml.calc.template",
  "application/vnd.sun.xml.draw",
  "application/vnd.sun.xml.draw.template",
  "application/vnd.sun.xml.impress",
  "application/vnd.sun.xml.impress.template",
  "application/vnd.sun.xml.math",
  "application/vnd.sun.xml.writer",
  "application/vnd.sun.xml.writer.global",
  "application/vnd.sun.xml.writer.template",
  "application/vnd.sus-calendar",
  "application/vnd.svd",
  "application/vnd.symbian.install",
  "application/vnd.syncml+xml",
  "application/vnd.syncml.dm+wbxml",
  "application/vnd.syncml.dm+xml",
  "application/vnd.syncml.dmddf+xml",
  "application/vnd.tao.intent-module-archive",
  "application/vnd.tcpdump.pcap",
  "application/vnd.tmobile-livetv",
  "application/vnd.trid.tpt",
  "application/vnd.triscape.mxs",
  "application/vnd.trueapp",
  "application/vnd.ufdl",
  "application/vnd.uiq.theme",
  "application/vnd.umajin",
  "application/vnd.unity",
  "application/vnd.uoml+xml",
  "application/vnd.vcx",
  "application/vnd.visio",
  "application/vnd.visionary",
  "application/vnd.vsf",
  "application/vnd.wap.wbxml",
  "application/vnd.wap.wmlc",
  "application/vnd.wap.wmlscriptc",
  "application/vnd.webturbo",
  "application/vnd.wolfram.player",
  "application/vnd.wordperfect",
  "application/vnd.wqd",
  "application/vnd.wt.stf",
  "application/vnd.xara",
  "application/vnd.xfdl",
  "application/vnd.yamaha.hv-dic",
  "application/vnd.yamaha.hv-script",
  "application/vnd.yamaha.hv-voice",
  "application/vnd.yamaha.openscoreformat",
  "application/vnd.yamaha.openscoreformat.osfpvg+xml",
  "application/vnd.yamaha.smaf-audio",
  "application/vnd.yamaha.smaf-phrase",
  "application/vnd.yellowriver-custom-menu",
  "application/vnd.zul",
  "application/vnd.zzazz.deck+xml",
  "application/voicexml+xml",
  "application/wasm",
  "application/watcherinfo+xml",
  "application/widget",
  "application/winhlp",
  "application/wsdl+xml",
  "application/wspolicy+xml",
  "application/x-7z-compressed",
  "application/x-abiword",
  "application/x-ace-compressed",
  "application/x-apple-diskimage",
  "application/x-authorware-bin",
  "application/x-authorware-map",
  "application/x-authorware-seg",
  "application/x-bcpio",
  "application/x-bittorrent",
  "application/x-blorb",
  "application/x-bzip",
  "application/x-bzip2",
  "application/x-cbr",
  "application/x-cdlink",
  "application/x-cfs-compressed",
  "application/x-chat",
  "application/x-chess-pgn",
  "application/x-cocoa",
  "application/x-conference",
  "application/x-cpio",
  "application/x-csh",
  "application/x-debian-package",
  "application/x-dgc-compressed",
  "application/x-director",
  "application/x-doom",
  "application/x-dtbncx+xml",
  "application/x-dtbook+xml",
  "application/x-dtbresource+xml",
  "application/x-dvi",
  "application/x-envoy",
  "application/x-eva",
  "application/x-font-bdf",
  "application/x-font-ghostscript",
  "application/x-font-linux-psf",
  "application/x-font-pcf",
  "application/x-font-snf",
  "application/x-font-type1",
  "application/x-freearc",
  "application/x-futuresplash",
  "application/x-gca-compressed",
  "application/x-glulx",
  "application/x-gnumeric",
  "application/x-gramps-xml",
  "application/x-gtar",
  "application/x-hdf",
  "application/x-install-instructions",
  "application/x-iso9660-image",
  "application/x-java-archive-diff",
  "application/x-java-jnlp-file",
  "application/x-latex",
  "application/x-lzh-compressed",
  "application/x-makeself",
  "application/x-mie",
  "application/x-mobipocket-ebook",
  "application/x-ms-application",
  "application/x-ms-shortcut",
  "application/x-ms-wmd",
  "application/x-ms-wmz",
  "application/x-ms-xbap",
  "application/x-msaccess",
  "application/x-msbinder",
  "application/x-mscardfile",
  "application/x-msclip",
  "application/x-msdownload",
  "application/x-msmediaview",
  "application/x-msmetafile",
  "application/x-msmoney",
  "application/x-mspublisher",
  "application/x-msschedule",
  "application/x-msterminal",
  "application/x-mswrite",
  "application/x-netcdf",
  "application/x-nzb",
  "application/x-perl",
  "application/x-pilot",
  "application/x-pkcs12",
  "application/x-pkcs7-certificates",
  "application/x-pkcs7-certreqresp",
  "application/x-rar-compressed",
  "application/x-redhat-package-manager",
  "application/x-research-info-systems",
  "application/x-sea",
  "application/x-sh",
  "application/x-shar",
  "application/x-shockwave-flash",
  "application/x-silverlight-app",
  "application/x-sql",
  "application/x-stuffit",
  "application/x-stuffitx",
  "application/x-subrip",
  "application/x-sv4cpio",
  "application/x-sv4crc",
  "application/x-t3vm-image",
  "application/x-tads",
  "application/x-tar",
  "application/x-tcl",
  "application/x-tex",
  "application/x-tex-tfm",
  "application/x-texinfo",
  "application/x-tgif",
  "application/x-ustar",
  "application/x-wais-source",
  "application/x-x509-ca-cert",
  "application/x-xfig",
  "application/x-xliff+xml",
  "application/x-xpinstall",
  "application/x-xz",
  "application/x-zmachine",
  "application/xaml+xml",
  "application/xcap-att+xml",
  "application/xcap-caps+xml",
  "application/xcap-diff+xml",
  "application/xcap-el+xml",
  "application/xcap-ns+xml",
  "application/xenc+xml",
  "application/xhtml+xml",
  "application/xliff+xml",
  "application/xml",
  "application/xml-dtd",
  "application/xop+xml",
  "application/xproc+xml",
  "application/xslt+xml",
  "application/xspf+xml",
  "application/xv+xml",
  "application/yaml",
  "application/yang",
  "application/yin+xml",
  "application/zip",
] as const); // cast as const to create enum helper

type MimeType = (typeof mimes)[number];

interface SourceExtension {
  source: string;
  charset: string;
  extensions: string[];
}

const ALLOWED_FILE_TYPES = Object.freeze([
  "image",
  "video",
  "audio",
  "pdf",
  "text",
  "blob",
] as const);

type FileType = (typeof ALLOWED_FILE_TYPES)[number];

const mimeType = new Map() as Map<MimeType, SourceExtension>;

for (const [keys, values] of toMap) {
  mimeType.set(keys as MimeType, values as SourceExtension);
}

export { mimeType, type MimeType, ALLOWED_FILE_TYPES, type FileType };
