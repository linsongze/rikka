'use strict';

function isImageType(typeStr) {
    // noinspection JSUnresolvedFunction
    if (typeStr.startsWith("image") === false) {
        return false;
    }

    const accepted = ["jpeg", "bmp", "gif", "png","avif","jxl"];
    return accepted.some(function(type){
        // noinspection JSUnresolvedFunction
        return typeStr.endsWith("/" + type)
    })
}

function check(maxSizeByMb) {
    const passwordInput = document.querySelector("input#password");
    const fileInput = document.querySelector("input#uploadFile");

    const file = fileInput.files[0];

    if (passwordInput.value === "") {
        alert("Please input password");
        return false;
    }

    if (file === undefined) {
        alert("Please choose a image to upload");
        return false;
    }

    let fileType = file.type;
    if (!isImageType(fileType)) {
        fileType = fileType || "unknown";
        alert("Can't upload a " + fileType + " type file");
        return false;
    }

    if (file.size > (maxSizeByMb * 1024 * 1024)) {
        const fileSizeByMb = Math.round(file.size / 1024 / 1024 * 100) / 100;
        alert("Max file size is " + maxSizeByMb + " Mb, input file is " + fileSizeByMb.toString() + " Mb");
        return false;
    }

    const imgElement = document.querySelector("img#uploading");
    imgElement.classList.add("show");

    return true;
}
