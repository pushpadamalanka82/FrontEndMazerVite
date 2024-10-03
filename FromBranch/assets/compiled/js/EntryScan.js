import"./modulepreload-polyfill.js";const method="post",headers={Accept:"application/json","Content-Type":"application/json"},body="",KeysJson={method,headers,body};let StartFunc$r=()=>{let t={};return t.references={},t.InSertObject={},t.InSertObject.QrCodeId=jFLocalFromDomInputPkId$1(),t.InSertObject.ItemName=jFLocalFromDomInputProductNameId(),t.InSertObject.Rate=jFLocalFromDomInputSalePriceId(),t.InSertObject.FactorySelected=jFLocalFromDomInputFactorySelectedId$1(),t.InSertObject.VoucherRef=jFLocalFromDomInputVoucherRefId(),t.InSertObject.BranchName=jFLocalFromDomInputBranchNameId(),t.InSertObject.VoucherNumber=jFLocalFromDomVoucherNumberTextId(),t.InSertObject.DCFactory=jFLocalFromDomDCFactoryTextId$1(),t.InSertObject.DCDate=jFLocalFromDomDateTextId(),t.InSertObject.DCDescription=jFLocalFromDomDescriptionTextId(),t.InSertObject.OrderNumber=jFLocalFromDomOrderNumberId(),t.InSertObject.OrderDate=jFLocalFromDomOrderDateId(),t.InSertObject.DeliveryDate=jFLocalFromDomDeliveryDateId(),t.InSertObject.FactoryName=localStorage.getItem("FactoryName"),KeysJson.body=JSON.stringify(t.InSertObject),KeysJson},jFLocalFromDomInputPkId$1=()=>document.getElementById("InputPkId").value.trim(),jFLocalFromDomInputProductNameId=()=>document.getElementById("InputProductNameId").value.trim(),jFLocalFromDomInputSalePriceId=()=>document.getElementById("InputSalePriceId").value.trim(),jFLocalFromDomInputVoucherRefId=()=>document.getElementById("InputVoucherRefId").value.trim(),jFLocalFromDomInputBranchNameId=()=>document.getElementById("InputBranchNameId").value.trim(),jFLocalFromDomVoucherNumberTextId=()=>document.getElementById("VoucherNumberTextId").value.trim(),jFLocalFromDomInputFactorySelectedId$1=()=>document.getElementById("InputFactorySelectedId").value.trim(),jFLocalFromDomDCFactoryTextId$1=()=>document.getElementById("DCFactoryTextId").value.trim(),jFLocalFromDomDescriptionTextId=()=>document.getElementById("DescriptionTextId").value.trim(),jFLocalFromDomDateTextId=()=>document.getElementById("DateTextId").value.trim(),jFLocalFromDomOrderNumberId=()=>document.getElementById("OrderNumberId").value.trim(),jFLocalFromDomOrderDateId=()=>document.getElementById("OrderDateId").value.trim(),jFLocalFromDomDeliveryDateId=()=>document.getElementById("DeliveryDateId").value.trim();const url$1="/Custom/Clients/Laundry/Factory/Inward/Scan/QrCode",UrlJson$1={url:url$1};let StartFunc$q=async()=>{let t=StartFunc$r(),a=localStorage.getItem("FactoryName"),e=`${UrlJson$1.url}/${a}`;return await await(await fetch(e,t)).json()},StartFunc$p=()=>{let t=jFLocalFromDomDCFactoryTextId();return jFLocalFromDomInputFactorySelectedId()===t?!0:(Swal.fire({icon:"error",title:"Error",text:`This item should be sent to ${jVarGlobalPresentViewData2.location}`}),!1)},jFLocalFromDomInputFactorySelectedId=()=>document.getElementById("InputFactorySelectedId").value.trim(),jFLocalFromDomDCFactoryTextId=()=>document.getElementById("DCFactoryTextId").value.trim(),StartFunc$o=({inFromFetch:t})=>{let a=t;if(a.KTF===!0)jFLocalForSuccess(a);else if(a.KTF===!1){let l=document.getElementById("InputPkId"),r=l.value.trim().length;l.setSelectionRange(0,r),Swal.fire({icon:"error",title:"Check And Scan",confirmButtonText:"ok"}).then(o=>{o.isConfirmed})}else{let l=document.getElementById("InputPkId"),r=l.value.trim().length;l.setSelectionRange(0,r),Swal.fire({icon:"error",title:"Oops...",text:`${t.KReason},${JSON.stringify(t.ServerSideCheck[0])}`})}},jFLocalForSuccess=t=>{const a=new URL(window.location.href),e=new URLSearchParams(a.search);e.set("NewPk",t.ScanNo),e.set("ShowAlert",!0),window.location.href=`${a.origin}${a.pathname}?${e}`,window.location.href=new_url.href},StartFunc$n=async()=>{StartFunc$p()&&StartFunc$q().then(t=>{StartFunc$o({inFromFetch:t})})};const StartFunc$m=()=>{let t=document.getElementById("ButtonSaveId");t!==null&&t.addEventListener("click",StartFunc$n)};let StartFunc$l=()=>{let jVarLocalInputPkId=jFLocalFromDomInputPkId(),jVarLocalEval='{{KS}}.split("~")[0].search("-") === -1 ? {{KS}}.split("~")[0] : {{KS}}.split("~")[0].split("-")[1]',jVarLocalId=eval(jVarLocalEval.replaceAll("{{KS}}",`"${jVarLocalInputPkId}"`));return console.log("jVarLocalId:",jVarLocalId),jVarLocalId},jFLocalFromDomInputPkId=()=>document.getElementById("InputPkId").value.trim(),StartFunc$k=async()=>{let a=`/Custom/Clients/Laundry/Factory/Inward/Scan/QrCode/RowQrData/${StartFunc$l()}`;return await await fetch(a)},StartFunc$j=async({inFetchResonse:t})=>{let a=await t.text(),l=document.getElementById("InputPkId"),r=l.value.trim().length;l.setSelectionRange(0,r),Swal.fire({icon:"error",title:`${a}`})},StartFunc$i=async({inFetchResonse:t})=>{let a=await t.json();if(Object.values(a).length>0){let e=a;jVarGlobalPresentViewData2=e,jFLocalToInputInputPkId({inInputPkId:e.pk}),jFLocalToInputInputProductNameId({inInputProductNameId:e.ItemName}),jFLocalToInputInputSalePriceId({inInputSalePriceId:e.Rate}),jFLocalToInputFactorySelectedId({inInputFactorySelectedId:e.location}),jFLocalToInputBranchNameId({inInputValue:e.BookingData.OrderData.BranchName}),jFLocalToInputOrderNumberId({inInputValue:e.GenerateReference.ReferncePk}),jFLocalToInputOrderDateId({inInputValue:e.BookingData.OrderData.Currentdateandtime}),jFLocalToInputDeliveryDateId({inInputValue:e.DeliveryDateTime}),jFLocalRunSaveClick()}},jFLocalRunSaveClick=()=>{document.getElementById("ButtonSaveId").click()},jFLocalToInputInputProductNameId=({inInputProductNameId:t})=>{let e=document.getElementById("InputProductNameId");e!==null&&(e.value=t)},jFLocalToInputInputSalePriceId=({inInputSalePriceId:t})=>{let e=document.getElementById("InputSalePriceId");e.value=t},jFLocalToInputFactorySelectedId=({inInputFactorySelectedId:t})=>{let e=document.getElementById("InputFactorySelectedId");e.value=t},jFLocalToInputInputPkId=({inInputPkId:t})=>{let e=document.getElementById("InputPkId");e.value=t},jFLocalToInputBranchNameId=({inInputValue:t})=>{let e=document.getElementById("InputBranchNameId");e.value=t},jFLocalToInputOrderNumberId=({inInputValue:t})=>{let e=document.getElementById("OrderNumberId");e.value=t},jFLocalToInputOrderDateId=({inInputValue:t})=>{let e=document.getElementById("OrderDateId");e.value=t},jFLocalToInputDeliveryDateId=({inInputValue:t})=>{let e=document.getElementById("DeliveryDateId");e.value=t},StartFunc$h=async({inFetchResonse:t})=>{if(t.status===500)return await StartFunc$j({inFetchResonse:t});if(t.status===200)return await StartFunc$i({inFetchResonse:t})},StartFunc$g=async({inEvent:t})=>{if(t.keyCode===13){let a=await StartFunc$k();await StartFunc$h({inFetchResonse:a})}};const StartFunc$f=()=>{let t=document.getElementById("InputPkId");t!==null&&t.addEventListener("keypress",()=>{StartFunc$g({inEvent:event})})};let StartFunc$e=()=>{StartFunc$f()},StartFunc$d=()=>{StartFunc$m(),StartFunc$e()};const url="/binV4/BranchDC/Show",UrlJson={url};let StartFunc$c=async()=>{let t=getUrlQueryParams$3({inGetKey:"VoucherRef"}),a=`${UrlJson.url}/${t}`;return await await(await fetch(a)).json()},getUrlQueryParams$3=({inGetKey:t})=>{const a=window.location.search;return new URLSearchParams(a).get(t)},StartFunc$b=({inDataToShow:t})=>{let a=t;jFLocalToInnerHtmlVoucherNumberTextId({inVoucherNumberTextId:a.pk}),jFLocalToInnerHtmlDescriptionTextId({inDescriptionTextId:a.Description}),jFLocalToInnerHtmlDateTextId({inDateTextId:a.Date}),jFLocalToInnerHtmlFactoryTextId({inFactoryTextId:a.Factory}),jFLocalToInputpkDCDetailsTextId({inpkDCDetailsTextId:a.pk}),jFLocalToInputVoucherNumberDCDetailsTextId({inVoucherNumberDCDetailsTextId:a.pk}),jFLocalToInputDateTextDCDetailsId({inDateTextDCDetailsId:a.Date}),jFLocalToInputDescriptionTextDCDetailsId({inDescriptionTextDCDetailsId:a.Description}),jFLocalToInputDCFactoryDCDetailsTextId({inDCFactoryDCDetailsTextId:a.Factory}),jFLocalToInputDCBranchNameDCDetailsTextId({inDCBranchNameDCDetailsTextId:a.BranchName})},jFLocalToInnerHtmlVoucherNumberTextId=({inVoucherNumberTextId:t})=>{let e=document.getElementById("VoucherNumberTextId");e.value=t},jFLocalToInnerHtmlDescriptionTextId=({inDescriptionTextId:t})=>{let e=document.getElementById("DescriptionTextId");e.value=t},jFLocalToInnerHtmlDateTextId=({inDateTextId:t})=>{let e=document.getElementById("DateTextId");e.value=t},jFLocalToInnerHtmlFactoryTextId=({inFactoryTextId:t})=>{let e=document.getElementById("DCFactoryTextId");e.value=t},jFLocalToInputpkDCDetailsTextId=({inpkDCDetailsTextId:t})=>{let e=document.getElementById("pkDCDetailsTextId");e!==null&&(e.innerHTML=t)},jFLocalToInputVoucherNumberDCDetailsTextId=({inVoucherNumberDCDetailsTextId:t})=>{let e=document.getElementById("VoucherNumberDCDetailsTextId");e!==null&&(e.innerHTML=t)},jFLocalToInputDateTextDCDetailsId=({inDateTextDCDetailsId:t})=>{let e=document.getElementById("DateTextDCDetailsId");e!==null&&(e.innerHTML=t)},jFLocalToInputDescriptionTextDCDetailsId=({inDescriptionTextDCDetailsId:t})=>{let e=document.getElementById("DescriptionTextDCDetailsId");e!==null&&(e.innerHTML=t)},jFLocalToInputDCFactoryDCDetailsTextId=({inDCFactoryDCDetailsTextId:t})=>{let e=document.getElementById("DCFactoryDCDetailsTextId");e!==null&&(e.innerHTML=t)},jFLocalToInputDCBranchNameDCDetailsTextId=({inDCBranchNameDCDetailsTextId:t})=>{let e=document.getElementById("DCBranchNameDCDetailsTextId");e!==null&&(e.innerHTML=t)},StartFunc$a=async()=>{let t=await StartFunc$c();t!==null&&t&&StartFunc$b({inDataToShow:t})},StartFunc$9=()=>{let t=getUrlQueryParams$2({inGetKey:"VoucherRef"}),a=localStorage.getItem("FactoryName");(t===""||t===null)&&Swal.fire({icon:"error",title:"Error",text:"VoucherRef Not Found in Params"}),(a===""||a===null)&&Swal.fire({icon:"error",title:"Error",text:"BranchName Not Found in Params"})},getUrlQueryParams$2=({inGetKey:t})=>{const a=window.location.search;return new URLSearchParams(a).get(t)},StartFunc$8=()=>{StartFunc$9()},StartFunc$7=()=>{const t=new URL(window.location.href),a=new URLSearchParams(t.search);let e=new URL("../DcItems/DcItems.html",t);const l=new URL(`${e.href}?${a}`);window.location.href=l.href};const StartFunc$6=()=>{document.getElementById("RowCountId").addEventListener("click",StartFunc$7)};let StartFunc$5=()=>{StartFunc$8(),jFLocalToInputInputVoucherRefId(),JFlocalShowAlertFunc(),JFlocalNewPkAlertFunc(),StartFunc$a(),jFLocalBranchName(),StartFunc$6()};const JFlocalShowAlertFunc=()=>{let t=getUrlQueryParams$1({inGetKey:"ShowAlert"}),a=document.getElementById("AlertSuccessId");t&&(a.style.display="")},JFlocalNewPkAlertFunc=()=>{let t=getUrlQueryParams$1({inGetKey:"NewPk"}),a=document.getElementById("AlertSuccessIdUserName");a.innerHTML=t};let jFLocalToInputInputVoucherRefId=()=>{let t=getUrlQueryParams$1({inGetKey:"VoucherRef"}),e=document.getElementById("InputVoucherRefId");e.value=t},jFLocalBranchName=()=>{let t=localStorage.getItem("FactoryName"),e=document.getElementById("BranchNameId");t!==null&&(e.innerHTML=t)},getUrlQueryParams$1=({inGetKey:t})=>{const a=window.location.search;return new URLSearchParams(a).get(t)},StartFunc$4=()=>{let t=getUrlQueryParams({inGetKey:"BranchName"});const a=new URL(`${window.location.origin}${window.location.pathname}`),e=new URL("../../DC/DcShowAll/DcShowAll.html",a.href);e.searchParams.append("BranchName",t),window.location.href=e.href},getUrlQueryParams=({inGetKey:t})=>{const a=window.location.search;return new URLSearchParams(a).get(t)};const StartFunc$3=()=>{let a=document.getElementById("ParentId");a!==null&&a.addEventListener("click",StartFunc$4)},StartFunc$2=()=>{StartFunc$3()},StartFunc$1=()=>{StartFunc$2()},StartFunc=()=>{StartFunc$1(),StartFunc$5(),StartFunc$d()};StartFunc();