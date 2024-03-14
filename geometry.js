// function calculateTriangleArea(){
//     const triangleBase=document.getElementById('triangle-base');
//     const triangleText=triangleBase.value;
//     const base=parseFloat(triangleText);
//     console.log(base);



//     const triangleHeight=document.getElementById('triangle-height');
//     const triangleHeightText=triangleHeight.value;
//     const height=parseFloat(triangleHeightText);
//     console.log(height);


//     const area=0.5 * base * height;
//     console.log('area', area);


//     // display triangle area
//     const triangleAreaSpan=document.getElementById('triangle-area');
//     triangleAreaSpan.innerText=area;

// }

function calculateRectangleArea(){
    const triangleBase=document.getElementById('rectangle-base');
    const triangleText=triangleBase.value;
    const base=parseFloat(triangleText);
    console.log(base);



    const triangleHeight=document.getElementById('rectangle-height');
    const triangleHeightText=triangleHeight.value;
    const height=parseFloat(triangleHeightText);
    console.log(height);


    const area=0.5 * base * height;
    console.log('area', area);


    // display triangle area
    const triangleAreaSpan=document.getElementById('rectangle-area');
    triangleAreaSpan.innerText=area;

}

function calculateSArea(){
    const sBase=document.getElementById('s-base');
    const sText=sBase.value;
    const base=parseFloat(sText);
    console.log(base);


    const sHight=document.getElementById('s-height');
    const sHightText=sHight.value;
    const height=parseFloat(sHightText);
    console.log(height);

    const area= base * height;
    console.log(area);

    const triangleAreaSpan=document.getElementById('s-area');
    triangleAreaSpan.innerText=area;

}






function calculateTriangleArea(){
    const base=getInputValueById('triangle-base');

    const height=getInputValueById('triangle-height');

    const area=base * height;
    console.log(area);

    setInnerTextById('triangle-area',area);

}
function getInputValueById(inputFieldId){
    const inputField=document.getElementById(inputFieldId);
    const inputValueText=inputField.value;
    const inputValue=parseFloat(inputValueText);
    console.log(inputValue);
    return inputValue;
}

function setInnerTextById(elementId,area){
    const element=document.getElementById(elementId);
    element.innerText=area;
}
