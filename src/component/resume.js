import React, { Component } from 'react'
import './css/resume.css'
import 'antd/dist/antd.css';
import pic1 from "./img/头像.png"
import { Avatar, Image, Timeline, Progress} from 'antd';
import Icon from '@ant-design/icons';



// 联系方式图标内容
const FilSvg = () => (
    <svg t="1645521666962" className="icon"  viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="12362" width="16" height="16"><path d="M1022.08 716.928V300.48l-217.28 217.344 217.28 199.04M655.36 667.2a188.16 188.16 0 0 1-133.888 55.488c-50.56 0-98.176-19.712-133.952-55.488L270.976 550.592 20.864 779.84v38.4c0 50.24 40.832 91.072 91.008 91.072h819.2c50.176 0 91.008-40.832 91.008-91.008v-39.68l-249.536-228.608-117.12 117.12" fill="#0a1349" p-id="12363"></path><path d="M932.928 128h-819.2C63.616 128 22.848 168.832 22.848 219.008v19.008l398.784 398.912c27.2 27.136 63.36 42.112 101.76 42.112 38.464 0 74.624-14.976 101.76-42.112L1024 238.016v-19.008C1024 168.832 983.04 128 932.928 128M20.864 300.48v417.6L238.72 518.4 20.864 300.48" fill="#0a1349" p-id="12364"></path></svg>

);

const MobSvg = () => (
    <svg t="1645521729697" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="13271" width="16" height="16"><path d="M926.342144 849.004544c34.132992-59.40224 15.22688-105.025536-45.21984-150.674432-71.057408-53.664768-140.500992-89.761792-190.43328-31.939584 0 0-52.989952 63.081472-208.927744-84.535296-181.32992-172.8512-105.227264-234.155008-105.227264-234.155008 63.065088-63.401984 22.976512-110.700544-29.915136-182.334464-52.887552-71.632896-106.313728-94.30528-183.013376-32.697344C15.804416 251.394048 224.212992 530.164736 329.58464 638.56128l-0.004096 0.008192c0 0 160.234496 165.740544 261.066752 220.915712l53.941248 30.16192c77.366272 39.701504 164.267008 57.875456 225.446912 21.009408C870.035456 910.65856 899.526656 895.489024 926.342144 849.004544z" p-id="13272" fill="#0a1349"></path></svg>

);

const WeiSvg = () => (
    
<svg t="1645521903856" className="icon"  viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="14894" width="16" height="16"><path d="M664.250054 368.541681c10.015098 0 19.892049 0.732687 29.67281 1.795902-26.647917-122.810047-159.358451-214.077703-310.826188-214.077703-169.353083 0-308.085774 114.232694-308.085774 259.274068 0 83.708494 46.165436 152.460344 123.281791 205.78483l-30.80868 91.730191 107.688651-53.455469c38.558178 7.53665 69.459978 15.308661 107.924012 15.308661 9.66308 0 19.230993-0.470721 28.752858-1.225921-6.025227-20.36584-9.521864-41.723264-9.521864-63.862493C402.328693 476.632491 517.908058 368.541681 664.250054 368.541681zM498.62897 285.87389c23.200398 0 38.557154 15.120372 38.557154 38.061874 0 22.846334-15.356756 38.156018-38.557154 38.156018-23.107277 0-46.260603-15.309684-46.260603-38.156018C452.368366 300.994262 475.522716 285.87389 498.62897 285.87389zM283.016307 362.090758c-23.107277 0-46.402843-15.309684-46.402843-38.156018 0-22.941502 23.295566-38.061874 46.402843-38.061874 23.081695 0 38.46301 15.120372 38.46301 38.061874C321.479317 346.782098 306.098002 362.090758 283.016307 362.090758zM945.448458 606.151333c0-121.888048-123.258255-221.236753-261.683954-221.236753-146.57838 0-262.015505 99.348706-262.015505 221.236753 0 122.06508 115.437126 221.200938 262.015505 221.200938 30.66644 0 61.617359-7.609305 92.423993-15.262612l84.513836 45.786813-23.178909-76.17082C899.379213 735.776599 945.448458 674.90216 945.448458 606.151333zM598.803483 567.994292c-15.332197 0-30.807656-15.096836-30.807656-30.501688 0-15.190981 15.47546-30.477129 30.807656-30.477129 23.295566 0 38.558178 15.286148 38.558178 30.477129C637.361661 552.897456 622.099049 567.994292 598.803483 567.994292zM768.25071 567.994292c-15.213493 0-30.594809-15.096836-30.594809-30.501688 0-15.190981 15.381315-30.477129 30.594809-30.477129 23.107277 0 38.558178 15.286148 38.558178 30.477129C806.808888 552.897456 791.357987 567.994292 768.25071 567.994292z" p-id="14895" fill="#0a1349"></path></svg>
 );

const XinSvg = () => (
   <svg t="1645521757456" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="13935" width="16" height="16"><path d="M711.212646 504.427534c-32.422434-6.349615-16.673751-23.904433-16.673751-23.904433s31.720446-52.641941-6.282077-90.915639c-47.084365-47.40159-161.495114 6.03239-161.495114 6.03239-43.696198 13.645788-32.127721-6.236028-25.937742-40.080857 0-39.877219-13.556761-107.364263-129.980353-67.509557-116.288516 40.080857-216.151945 180.498934-216.151945 180.498934-69.451792 93.312222-60.233849 165.429727-60.233849 165.429727 17.32969 159.202908 185.311543 202.899106 315.990814 213.246779 137.457652 10.891048 322.995345-47.716768 379.252627-168.037111C845.959559 558.650483 743.747643 510.956228 711.212646 504.427534zM420.616198 802.354947c-136.462998 6.417153-246.787686-62.49331-246.787686-154.212244 0-91.795683 110.323665-165.42768 246.787686-171.753759 136.554072-6.326079 247.104911 50.314942 247.104911 141.954059C667.721109 710.038402 557.170271 796.119943 420.616198 802.354947zM393.414673 536.847921C256.137123 553.026392 271.997346 682.486906 271.997346 682.486906s-1.400906 41.017182 36.804231 61.893652c80.319304 43.786249 163.010631 17.261129 204.809619-37.053917C555.409161 652.978848 530.872325 520.78406 393.414673 536.847921zM358.778828 718.577892c-25.644053 3.027963-46.27186-11.882632-46.27186-33.44881 0-21.509896 18.322297-44.0124 43.988864-46.701648 29.416983-2.824325 48.576345 14.256702 48.576345 35.834136C405.0732 695.771467 384.309294 715.642027 358.778828 718.577892zM439.685509 649.160893c-8.676613 6.529717-19.361977 5.625114-23.948435-2.214435-4.79112-7.636934-2.982938-19.881816 5.782703-26.321482 10.190083-7.614421 20.763906-5.423523 25.350364 2.213411C451.4566 630.67896 448.180997 642.426515 439.685509 649.160893zM778.04375 448.372867c11.070126 0 20.470217-8.246825 22.051225-19.001773 0.181125-0.791016 0.292666-1.490957 0.292666-2.394537 16.764825-151.781892-123.494639-125.664048-123.494639-125.664048-12.449543 0-22.437012 10.144034-22.437012 22.797215 0 12.472056 9.987468 22.61609 22.437012 22.61609 100.743472-22.412452 78.512145 79.031984 78.512145 79.031984C755.405147 438.318884 765.572718 448.372867 778.04375 448.372867zM761.686201 183.465498c-48.485271-11.432377-98.371448-1.582031-112.334461 1.107217-1.084705 0.112564-2.077312 1.12973-3.072989 1.333368-0.496304 0.090051-0.813528 0.60989-0.813528 0.60989-13.758352 3.90903-23.835871 16.763802-23.835871 31.924083 0 18.09717 14.572904 32.963763 32.716122 32.963763 0 0 17.645892-2.39556 29.619598-7.094582 11.884678-4.812609 112.333438-3.591805 162.220638 80.771605 27.201525 61.567217 11.973706 102.776781 10.05296 109.397572 0 0-6.483668 15.995299-6.483668 31.765471 0 18.164708 14.59644 29.597085 32.624025 29.597085 15.071254 0 27.744901-2.078335 31.451316-27.743878l0.180102 0C967.580524 288.321638 848.467683 203.843618 761.686201 183.465498z" p-id="13936" fill="#0a1349"></path></svg>

 );

 const FacSvg = () => (
    <svg t="1645521952415" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="15795" width="16" height="16"><path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32z m-32 736H663.9V602.2h104l15.6-120.7H663.9v-77.1c0-35 9.7-58.8 59.8-58.8h63.9v-108c-11.1-1.5-49-4.8-93.2-4.8-92.2 0-155.3 56.3-155.3 159.6v89H434.9v120.7h104.3V848H176V176h672v672z" p-id="15796" fill="#0a1349"></path></svg>

    );

    const FilIcon = props => (
        <Icon component={FilSvg} {...props} />
    );
    const MobIcon = props => (
        <Icon component={MobSvg} {...props} />
    );
    const WeiIcon = props => (
        <Icon component={WeiSvg} {...props} />
    );
    const XinIcon = props => (
        <Icon component={XinSvg} {...props} />
    );
    const FacIcon = props => (
        <Icon component={FacSvg} {...props} />
    );



// 兴趣爱好图标内容

const PhoSvg = () => (
    <svg t="1645510499200" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="8509" width="32" height="32"><path d="M825.6 176h-44.8v-44.8c0-24.6-20.2-44.8-44.8-44.8H601.6c-24.6 0-44.8 20.2-44.8 44.8V176H198.4C124.5 176 64 236.5 64 310.4v403.2C64 787.5 124.5 848 198.4 848h134.7c40.9 54.3 105.7 89.6 178.9 89.6s138-35.3 178.9-89.6h134.7c73.9 0 134.4-60.5 134.4-134.4V310.4c0-73.9-60.5-134.4-134.4-134.4z m-224-44.8H736V176H601.6v-44.8zM512 892.8c-98.8 0-179.2-80.4-179.2-179.2 0-98.8 80.4-179.2 179.2-179.2s179.2 80.4 179.2 179.2c0 98.8-80.4 179.2-179.2 179.2z m403.2-179.2c0 49.4-40.2 89.6-89.6 89.6H717.2c12-27.5 18.8-57.7 18.8-89.6 0-123.7-100.3-224-224-224s-224 100.3-224 224c0 31.9 6.8 62.1 18.8 89.6H198.4c-49.4 0-89.6-40.2-89.6-89.6V355.2h582.4c12.4 0 22.4-10 22.4-22.4 0-12.4-10-22.4-22.4-22.4H108.8c0-49.4 40.2-89.6 89.6-89.6H825.6c49.4 0 89.6 40.2 89.6 89.6H780.8c-12.4 0-22.4 10-22.4 22.4 0 12.4 10 22.4 22.4 22.4h134.4v358.4z" p-id="8510" fill="#091661"></path><path d="M512 713.6m-67.2 0a67.2 67.2 0 1 0 134.4 0 67.2 67.2 0 1 0-134.4 0Z" p-id="8511" fill="#091661"></path><path d="M635 659.8c-0.6-1.3-1.3-2.5-2.3-3.4-3.8-3.8-11.1-4.9-16 0.1-3.2 3.2-4.2 8-2.4 11.9 21.9 49.6 6.1 106.1-38.5 137.4-36.8 25.8-86.6 26.7-124.1 2.3-6.9-4.5-13.2-9.6-18.9-15.3-43.7-43.7-43.7-114.7 0-158.4 32.4-32.4 82.4-41.6 124.4-23 4 1.7 8.8 0.7 12-2.5 4.9-4.9 3.8-12.2 0-16-1-1-2.2-1.8-3.5-2.4-51-22.3-109.4-11.3-148.7 28-52.4 52.4-52.4 137.7 0 190.1l1.7 1.6c25.6 24.7 59.8 37.8 96.6 36.9 36.8-0.9 70.5-15.7 94.9-41.7 36.6-39.1 46.4-96.3 24.8-145.6z" p-id="8512" fill="#0a1349"></path></svg>

);

const DraSvg = () => (
   <svg t="1645510237799"  className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="7007" width="32" height="32"><path d="M383.853714 257.170286l-0.487619-4.681143c-14.019048-104.082286 73.264762-183.759238 184.758857-139.580953 45.83619 18.16381 94.329905 45.884952 126.415238 73.386667A30.47619 30.47619 0 0 1 654.872381 232.594286c-26.575238-22.77181-69.241905-47.201524-109.226667-63.024762-64.121905-25.404952-107.910095 12.653714-102.351238 70.631619l0.487619 4.169143c6.777905 50.785524-13.775238 96.207238-58.148571 114.663619-58.09981 24.137143-121.392762 5.510095-149.138286-55.344762-8.362667-18.334476-34.986667-33.475048-62.342095-32.402286-33.767619 1.316571-64.146286 25.404952-84.163048 77.653333-67.876571 177.005714 15.262476 371.614476 190.805334 441.148953 68.388571 27.111619 147.602286 30.549333 221.379047 11.702857a30.47619 30.47619 0 0 1 15.116191 59.050667c-85.869714 21.942857-178.176 17.92-258.925715-14.092191-206.848-81.92-305.005714-311.661714-225.28-519.631238C61.44 253.123048 112.39619 212.699429 171.78819 210.383238c49.39581-1.926095 97.475048 24.33219 117.906286 63.439238l2.243048 4.559238c13.04381 28.598857 40.569905 36.693333 70.314666 24.356572 15.36-6.38781 23.454476-22.601143 21.601524-45.592381zM826.343619 18.992762a30.47619 30.47619 0 0 1 52.370286 31.134476l-5.290667 9.313524-3.267048 5.948952c-7.070476 12.946286-14.969905 28.184381-23.478857 45.568a1723.026286 1723.026286 0 0 0-71.801904 169.618286c-3.730286 10.264381-7.387429 20.626286-10.971429 31.085714-27.843048 81.188571-43.715048 167.424-50.517333 250.148572a30.47619 30.47619 0 0 1-60.757334-4.998096c7.192381-87.381333 23.942095-178.41981 53.613715-264.923428 3.705905-10.825143 7.484952-21.528381 11.361523-32.134095a1783.710476 1783.710476 0 0 1 74.361905-175.640381l8.679619-17.456762c4.242286-8.362667 8.313905-16.164571 12.190476-23.405714l10.337524-18.797715c1.316571-2.31619 2.364952-4.144762 3.169524-5.461333zM990.305524 45.251048a30.47619 30.47619 0 0 1 28.135619 32.670476l-1.316572 13.921524a959.878095 959.878095 0 0 1-0.950857 8.387047l-2.291809 18.432c-1.706667 12.873143-3.754667 26.86781-6.217143 41.886476a1806.921143 1806.921143 0 0 1-47.542857 209.066667c-15.555048 53.76-37.034667 108.153905-62.927238 162.133333a1327.250286 1327.250286 0 0 1-61.147429 112.88381l-8.533333 13.897143c-2.730667 4.388571-5.412571 8.582095-7.948191 12.55619l-10.678857 16.140191a30.47619 30.47619 0 1 1-51.053714-33.353143l6.972952-10.410667 7.216762-11.215238a1266.736762 1266.736762 0 0 0 70.217143-126.902857c24.527238-51.102476 44.78781-102.4 59.318857-152.673524a1746.236952 1746.236952 0 0 0 45.958095-201.947428c2.340571-14.384762 4.315429-27.769905 5.924572-39.984762l2.194286-17.505524c1.145905-9.849905 1.755429-16.579048 2.023619-19.846095a30.47619 30.47619 0 0 1 29.525333-28.208762l3.120762 0.073143z" fill="#13227a" p-id="7008"></path><path d="M594.944 641.609143c-6.192762 5.38819-13.848381 14.628571-20.967619 28.038095-17.529905 33.01181-23.235048 76.092952-11.434667 128.731429 9.581714 42.73981 3.85219 84.74819-11.702857 123.245714a213.113905 213.113905 0 0 1-11.142095 23.478857l-4.315429 7.265524c-15.335619 22.479238 4.217905 52.248381 30.939429 47.104 15.774476-3.023238 41.447619-11.337143 73.679238-27.452952 52.687238-26.331429 105.130667-65.462857 153.84381-119.759239 4.217905-4.705524 8.411429-9.532952 12.55619-14.457904 53.174857-63.24419 38.838857-154.209524-25.453714-203.580953-54.613333-41.984-131.779048-39.984762-182.393905 4.096l-3.608381 3.291429z m148.870095 40.935619c37.741714 29.013333 45.860571 80.457143 15.945143 116.004571-3.730286 4.437333-7.484952 8.777143-11.288381 13.019429l-8.728381 9.508571c-37.961143 40.350476-77.897143 70.38781-117.784381 91.672381l-4.486095 2.29181 1.194667-4.071619c10.069333-36.985905 12.775619-76.239238 5.266285-116.589715l-1.926095-9.337904c-8.630857-38.473143-4.87619-66.681905 5.802667-86.820572 2.925714-5.485714 5.461333-8.825905 6.631619-10.118095l1.536-1.438476c28.525714-27.209143 75.142095-29.257143 107.836952-4.144762z" fill="#13227a" p-id="7009"></path><path d="M663.210667 743.545905c18.334476-7.314286 38.253714-9.508571 58.294857-2.998857l6.290286 2.340571 4.510476 1.950476c3.120762 1.487238 5.973333 3.169524 12.970666 7.484953l3.267048 1.999238c16.871619 10.361905 20.23619 10.556952 36.181333-3.291429a30.47619 30.47619 0 1 1 39.936 46.08c-37.497905 32.475429-68.266667 32.182857-103.765333 11.702857l-13.628952-8.216381a26.136381 26.136381 0 0 0-2.340572-1.219047l-0.902095-0.365715c-5.193143-2.072381-11.580952-1.511619-18.212571 1.145905l-3.82781 1.755429a30.47619 30.47619 0 1 1-33.401905-50.980572c3.34019-2.194286 8.289524-4.87619 14.628572-7.387428zM759.686095 498.688l96.889905 29.866667-17.944381 58.270476-96.914286-29.891048zM243.321905 571.075048a50.371048 50.371048 0 1 0 0 100.766476 50.371048 50.371048 0 0 0 0-100.766476z m0 39.814095a10.581333 10.581333 0 1 1 0 21.138286 10.581333 10.581333 0 0 1 0-21.138286zM402.529524 650.703238a50.371048 50.371048 0 1 0 0 100.742095 50.371048 50.371048 0 0 0 0-100.742095z m0 39.789714a10.581333 10.581333 0 1 1 0 21.162667 10.581333 10.581333 0 0 1 0-21.162667zM183.588571 411.867429a50.371048 50.371048 0 1 0 0 100.766476 50.371048 50.371048 0 0 0 0-100.766476z m0 39.814095a10.581333 10.581333 0 1 1 0 21.138286 10.581333 10.581333 0 0 1 0-21.138286zM561.761524 252.635429a50.371048 50.371048 0 1 0 0 100.766476 50.371048 50.371048 0 0 0 0-100.766476z m0 39.814095a10.556952 10.556952 0 1 1 0 21.138286 10.556952 10.556952 0 0 1 0-21.138286z" fill="#0a1349" p-id="7010"></path></svg>
);
const TriSvg = () => (
    <svg t="1645510636805"  className="icon" viewBox="0 0 1033 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="9720" width="32" height="32"><path d="M550.912 718.848l0 20.48q0 10.24-2.048 19.456l2.048 0 199.68 151.552-530.432 0 187.392-147.456q-3.072-19.456-3.072-44.032l-20.48-310.272-221.184 120.832-179.2-60.416 389.12-229.376-8.192-125.952q0-23.552 9.216-44.032t24.576-35.84 35.84-24.576 44.032-9.216 44.032 9.216 35.84 24.576 24.576 35.84 9.216 44.032l-8.192 123.904 402.432 230.4-202.752 63.488-210.944-123.904z" p-id="9721" fill="#0a1349"></path></svg>
);
const MusSvg = () => (

    <svg t="1645510682511"  className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="10779" width="32" height="32"><path d="M844.743872 64.641229l-483.775168 80.814584c-1.567705 0.25071-3.031033 0.710175-4.453429 1.254573l-17.475 0c-11.915377 0-21.38403 9.532097-21.38403 21.280676l0 553.029462c-18.875906-10.912537-40.825824-17.140379-64.216557-17.140379-70.927399 0-128.433114 57.359382-128.433114 128.139425S182.512289 960.15695 253.439688 960.15695c70.926376 0 128.433114-57.359382 128.433114-128.139425 0-5.184069-0.314155-10.285251-0.899486-15.259542 0.585331-1.964748 0.899486-4.013407 0.899486-6.187933l0-449.764564 449.513854-79.267345 0 311.298955c-18.875906-10.870582-40.825824-17.142425-64.216557-17.142425-70.927399 0-128.433114 57.401338-128.433114 128.183428 0 70.738088 57.505715 128.139425 128.433114 128.139425 70.926376 0 128.432091-57.401338 128.432091-128.139425 0-5.184069-0.313132-10.285251-0.898463-15.301498 0.585331-1.966795 0.898463-4.015454 0.898463-6.187933l0-597.97307c0-10.45205-7.587815-19.190061-17.579377-20.946055-3.491521-2.173502-7.881504-3.051499-12.710486-2.257413l-11.370978 1.922792-1.170662 0C849.927941 63.135946 847.21004 63.679321 844.743872 64.641229z" p-id="10780" fill="#0a1349"></path></svg>
)





const PhoIcon = props => (
    <Icon component={PhoSvg} {...props} />
);
const DraIcon = props => (
    <Icon component={DraSvg} {...props} />
);
const TriIcon = props => (
    <Icon component={TriSvg} {...props} />
);
const MusIcon = props => (
    <Icon component={MusSvg} {...props} />
);













export default class App extends Component {



    render() {

        return (



            // 全局页面
            <div className='container'>

                {/* 简历页面 */}
                <div className='page'>

                    {/* 简历左侧 */}
                    <div className='leftside'>

                        {/* 简历左上侧 */}
                        <div className='left-top'>
                            <div className="profile">
                                <Avatar size={115} src={<Image src={pic1} />} />,
                            </div>

                            <div className='lefttop-red-font'>
                                <div className='lefttop-red-font1'>
                                <div className='space'>
                                <div style={{ color: "rgb(255,99,100)" }}> <b>软件工程 </b></div>
                                </div> 
                                    
                                    <div style={{ color: "rgb(64,75,105)" }}>
                                        <b>
                                            SOFTWARE<br />
                                            ENGINEERING
                                        </b>
                                    </div>

                                </div>

                            </div>

                        </div>
                        {/* 简历左中间 */}
                        <div className='left-center'>
                            <div className='left-white-font1'>
                                P R O F I L E
                            </div>

                            <div className='left-white-font1'>
                                李琦
                            </div>

                            <div className='left-white-font2'>
                                男<br />
                                上海<br />
                                1993.10.21
                            </div>


                        </div>


                        {/* 简历左下侧 */}
                        <div className='left-bottom'>

                            <div className='left-botto'>
                                
                                <div className='left-bottom1'>
                                <div className='space'>
                                教 育 经 历
                                </div> 
                                  
                                    EDUCATION BACKGROUND
                                </div>
                                <div className='left-bottom2'>
                                    <Timeline>
                                        <Timeline.Item color='red'>
                                            <label style={{ color: "rgb(255,99,100)" }}>上海觅知大学</label>
                                            <p style={{ color: "white" }}><b>软件工程|本科</b> 2012.09-2016.07</p>
                                        </Timeline.Item>
                                        <Timeline.Item color='red'>
                                            <label style={{ color: "rgb(255,99,100)" }}>主修课程</label>
                                            <p style={{ color: "white" }}>C/C++程序设计、Java程序设计、数据结构、计算方法、编译原理、软件工程、操作系统原理、
                                                数据库系统原理、网络数据库等</p>
                                            <p style={{ color: "rgb(255,99,100)" }}>GPA:3.8/4.0 在校四年均保持持名位于专业前10%</p>
                                        </Timeline.Item>
                                    </Timeline>,
                                </div>

                                <div className='left-bottom1'>
                                <div className='space'>
                                工 作 经 历
                                </div> 
                                    WORK EXPRIENCE
                                </div>

                                <div className='left-bottom2'>
                                    <Timeline >
                                        <Timeline.Item color='red'>
                                            <label style={{ color: "rgb(255,99,100)" }}>觅知办公有限公司</label>
                                            <p style={{ color: "white" }}><b>Java工程师</b> 2016.09-2019.07</p>
                                        </Timeline.Item>
                                        <Timeline.Item color='red'>
                                            <p style={{ color: "white" }}>根据产品需求，完成项目的任务分析设计，完成详细设计和编码，
                                                确保项目的进度和质量</p>
                                        </Timeline.Item>
                                        <Timeline.Item color='red'>
                                            <p style={{ color: "white" }}>负责后端API设计和开发维护，从构思到执行，编写架构性好的后端代码</p>
                                        </Timeline.Item>
                                        <Timeline.Item color='red'>
                                            <p style={{ color: "white" }}>协助其他人员的开发测试，完成测试阶段的BUG修改</p>
                                        </Timeline.Item>
                                    </Timeline>,
                                </div>



                            </div>



                        </div>

                    </div>

                    {/* 简历右侧 */}
                    <div className='rightside'>

                        {/* 简历右上侧 */}
                        <div className='righttop'>
                            <div className='lefttop-red-font' style={{ color: "rgb(255,99,100)" }}
                            >
                                <div className='space'>
                                <b>联系方式/社交媒体</b>
                                <br/>
                                    </div>
                                
                            </div>
                            <div >
                                <div className='kuai'>
                                <FilIcon />
                                <span>Oliyeng93@hotmalcom</span>
                                <MobIcon  />
                                <span>13566667573</span>
                                <br/>
                                <WeiIcon  />
                                <span>Yd_11161</span>
                                <XinIcon  />
                                <span>@unloooedDoor</span>
                                <FacIcon  />
                                <span>@xuelang</span>
                                </div>
                                

                                </div>

                        </div>

                        {/*简历右中侧  */}

                        <div>
                        <div className='space'>
                        <h2 style={{ color: "rgb(255,99,100)" }}>ABOUTME</h2>
                                    </div>
                           
                            <div className='about'>
                                软件工程专业背景,有丰富的软件开发经历,
                                扎实的技术基础;工作细致认真,积极主动,有
                                耐心,严谨;有较强的的逻辑思维能力,善于
                                分析、归纳、解决问题;有较强的的沟通技
                                巧及团队合作精神，组织协调能力，较强的
                                责任感及进取精神;对技术有浓厚兴趣,喜欢
                                并不断的学习新技术。
                            </div>


                        </div>






                        <div className='skill'>

                           <div className='space'><h2 style={{ color: "rgb(64,75,105)" }}> <b>专业技能 </b>
                                <label style={{ color: "rgb(255,99,100)" }}>SKILLS</label> </h2>
                                </div> 
                            <div style={{ width: 160 }}>
                                <Progress percent={96} size="small" format={() => <b style={{ color: "rgb(64,75,105)" }}>JAVA/JavaScript</b>} strokeColor="rgb(255,99,100)" />
                                <Progress percent={90} size="small" format={() => <b style={{ color: "rgb(64,75,105)" }}>Spring</b>} strokeColor="rgb(255,99,100)" />
                                <Progress percent={87} size="small" format={() => <b style={{ color: "rgb(64,75,105)" }}>MyBatis</b>} strokeColor="rgb(255,99,100)" />

                            </div>,
                            <div style={{ color: "rgb(255,99,100)" }}>
                                熟悉数据库原理和常用性能优化技术，以及NoSQL,Queue的原理、使用场景及限制
                            </div>
                        </div>

                        <div className='skill'>
                        <div className='space'>
                        <h2 style={{ color: "rgb(64,75,105)" }}> <b >语言技能 </b>
                                <label style={{ color: "rgb(255,99,100)" }}>LANGUAGE</label> </h2>
                                    </div>

                            <div style={{ width: 160 }}>
                                <Progress percent={96} size="small" format={() => <b style={{ color: "rgb(64,75,105)" }}>英语</b>} strokeColor="rgb(255,99,100)" />
                                <Progress percent={96} size="small" format={() => <b style={{ color: "rgb(64,75,105)" }}>西班牙语</b>} strokeColor="rgb(255,99,100)" />
                                <div style={{ color: "rgb(255,99,100)" }}>
                                    全国计算机等级二级
                                </div>

                            </div>,

                        </div>

                        <div className='skill'>
                        <div className='space'>
                        <h2 style={{ color: "rgb(64,75,105)" }}> <b >奖项荣誉 </b>
                                <label style={{ color: "rgb(255,99,100)" }}>AWARDS</label> </h2>
                                </div> 

                            <div>
                                <div style={{ color: "rgb(64,75,105)" }}> <b >IOI 2019 </b>
                                    <label style={{ color: "rgb(255,99,100)" }}>SKILLS</label>
                                </div>
                                <div style={{ color: "rgb(64,75,105)" }}> <b >AP Computer Science A  </b>
                                    <label style={{ color: "rgb(255,99,100)" }}>5</label>
                                </div>

                            </div>,

                        </div>

                        <div className='skill'>
                        <div className='space'>
                        <h2 style={{ color: "rgb(64,75,105)" }}> <b >兴趣爱好 </b>
                                <label style={{ color: "rgb(255,99,100)" }}>HOBBIES</label> </h2>
                                </div> 
                           
                            <div className="icons">
                                <div className="icon">
                                 <PhoIcon />
                                <DraIcon  />
                                <TriIcon  />
                                <MusIcon  />

                                </div>
                               
                                <label>&nbsp;&nbsp;&nbsp;摄影</label>
                                
                                <label>绘画</label>
                                
                                <label>旅游</label>
                                
                                <label>音乐</label>
                            </div>,


                        </div>

                    </div>

                 



                </div>


            </div>
        )
    }
    






}
