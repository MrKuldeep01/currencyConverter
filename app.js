const countryData = {
  AF: "AFN", // Afghanistan
  AL: "ALL", // Albania
  DZ: "DZD", // Algeria
  AS: "USD", // American Samoa
  AD: "EUR", // Andorra
  AO: "AOA", // Angola
  AI: "XCD", // Anguilla
  AQ: "None", // Antarctica (No specific currency)
  AG: "XCD", // Antigua and Barbuda
  AR: "ARS", // Argentina
  AM: "AMD", // Armenia
  AW: "AWG", // Aruba
  AU: "AUD", // Australia
  AT: "EUR", // Austria
  AZ: "AZN", // Azerbaijan
  BS: "BSD", // Bahamas
  BH: "BHD", // Bahrain
  BD: "BDT", // Bangladesh
  BB: "BBD", // Barbados
  BY: "BYN", // Belarus
  BE: "EUR", // Belgium
  BZ: "BZD", // Belize
  BJ: "XOF", // Benin
  BM: "BMD", // Bermuda
  BT: "BTN", // Bhutan
  BO: "BOB", // Bolivia
  BA: "BAM", // Bosnia and Herzegovina
  BW: "BWP", // Botswana
  BR: "BRL", // Brazil
  IO: "USD", // British Indian Ocean Territory
  BN: "BND", // Brunei Darussalam
  BG: "BGN", // Bulgaria
  BF: "XOF", // Burkina Faso
  BI: "BIF", // Burundi
  KH: "KHR", // Cambodia
  CM: "XAF", // Cameroon
  CA: "CAD", // Canada
  CV: "CVE", // Cape Verde
  KY: "KYD", // Cayman Islands
  CF: "XAF", // Central African Republic
  TD: "XAF", // Chad
  CL: "CLP", // Chile
  CN: "CNY", // China
  CX: "AUD", // Christmas Island
  CC: "AUD", // Cocos (Keeling) Islands
  CO: "COP", // Colombia
  KM: "KMF", // Comoros
  CG: "XAF", // Congo
  CD: "CDF", // Congo, Democratic Republic of the
  CK: "NZD", // Cook Islands
  CR: "CRC", // Costa Rica
  CI: "XOF", // Côte d'Ivoire
  HR: "HRK", // Croatia
  CU: "CUP", // Cuba
  CY: "EUR", // Cyprus
  CZ: "CZK", // Czech Republic
  DK: "DKK", // Denmark
  DJ: "DJF", // Djibouti
  DM: "XCD", // Dominica
  DO: "DOP", // Dominican Republic
  EC: "USD", // Ecuador
  EG: "EGP", // Egypt
  SV: "USD", // El Salvador
  GQ: "XAF", // Equatorial Guinea
  ER: "ERN", // Eritrea
  EE: "EUR", // Estonia
  ET: "ETB", // Ethiopia
  FK: "FKP", // Falkland Islands (Malvinas)
  FO: "DKK", // Faroe Islands
  FJ: "FJD", // Fiji
  FI: "EUR", // Finland
  FR: "EUR", // France
  GF: "EUR", // French Guiana
  PF: "XPF", // French Polynesia
  TF: "EUR", // French Southern Territories
  GA: "XAF", // Gabon
  GM: "GMD", // Gambia
  GE: "GEL", // Georgia
  DE: "EUR", // Germany
  GH: "GHS", // Ghana
  GI: "GIP", // Gibraltar
  GR: "EUR", // Greece
  GL: "DKK", // Greenland
  GD: "XCD", // Grenada
  GP: "EUR", // Guadeloupe
  GU: "USD", // Guam
  GT: "GTQ", // Guatemala
  GG: "GBP", // Guernsey
  GN: "GNF", // Guinea
  GW: "XOF", // Guinea-Bissau
  GY: "GYD", // Guyana
  HT: "HTG", // Haiti
  HM: "AUD", // Heard Island and McDonald Islands
  VA: "EUR", // Holy See (Vatican City State)
  HN: "HNL", // Honduras
  HK: "HKD", // Hong Kong
  HU: "HUF", // Hungary
  IS: "ISK", // Iceland
  IN: "INR", // India
  ID: "IDR", // Indonesia
  IR: "IRR", // Iran, Islamic Republic of
  IQ: "IQD", // Iraq
  IE: "EUR", // Ireland
  IM: "GBP", // Isle of Man
  IL: "ILS", // Israel
  IT: "EUR", // Italy
  JM: "JMD", // Jamaica
  JP: "JPY", // Japan
  JE: "GBP", // Jersey
  JO: "JOD", // Jordan
  KZ: "KZT", // Kazakhstan
  KE: "KES", // Kenya
  KI: "AUD", // Kiribati
  KP: "KPW", // Korea, Democratic People's Republic of
  KR: "KRW", // Korea, Republic of
  KW: "KWD", // Kuwait
  KG: "KGS", // Kyrgyzstan
  LA: "LAK", // Lao People's Democratic Republic
  LV: "EUR", // Latvia
  LB: "LBP", // Lebanon
  LS: "LSL", // Lesotho
  LR: "LRD", // Liberia
  LY: "LYD", // Libya
  LI: "CHF", // Liechtenstein
  LT: "EUR", // Lithuania
  LU: "EUR", // Luxembourg
  MO: "MOP", // Macao
  MK: "MKD", // North Macedonia
  MG: "MGA", // Madagascar
  MW: "MWK", // Malawi
  MY: "MYR", // Malaysia
  MV: "MVR", // Maldives
  ML: "XOF", // Mali
  MT: "EUR", // Malta
  MH: "USD", // Marshall Islands
  MQ: "EUR", // Martinique
  MR: "MRU", // Mauritania
  MU: "MUR", // Mauritius
  YT: "EUR", // Mayotte
  MX: "MXN", // Mexico
  FM: "USD", // Micronesia, Federated States of
  MD: "MDL", // Moldova, Republic of
  MC: "EUR", // Monaco
  MN: "MNT", // Mongolia
  ME: "EUR", // Montenegro
  MS: "XCD", // Montserrat
  MA: "MAD", // Morocco
  MZ: "MZN", // Mozambique
  MM: "MMK", // Myanmar
  NA: "NAD", // Namibia
  NR: "AUD", // Nauru
  NP: "NPR", // Nepal
  NL: "EUR", // Netherlands
  NC: "XPF", // New Caledonia
  NZ: "NZD", // New Zealand
  NI: "NIO", // Nicaragua
  NE: "XOF", // Niger
  NG: "NGN", // Nigeria
  NU: "NZD", // Niue
  NF: "AUD", // Norfolk Island
  MP: "USD", // Northern Mariana Islands
  NO: "NOK", // Norway
  OM: "OMR", // Oman
  PK: "PKR", // Pakistan
  PW: "USD", // Palau
  PS: "ILS", // Palestine, State of
  PA: "PAB", // Panama
  PG: "PGK", // Papua New Guinea
  PY: "PYG", // Paraguay
  PE: "PEN", // Peru
  PH: "PHP", // Philippines
  PN: "NZD", // Pitcairn
  PL: "PLN", // Poland
  PT: "EUR", // Portugal
  PR: "USD", // Puerto Rico
  QA: "QAR", // Qatar
  RE: "EUR", // Réunion
  RO: "RON", // Romania
  RU: "RUB", // Russia
  RW: "RWF", // Rwanda
  BL: "EUR", // Saint Barthélemy
  SH: "SHP", // Saint Helena, Ascension and Tristan da Cunha
  KN: "XCD", // Saint Kitts and Nevis
  LC: "XCD", // Saint Lucia
  MF: "EUR", // Saint Martin (French part)
  PM: "EUR", // Saint Pierre and Miquelon
  VC: "XCD", // Saint Vincent and the Grenadines
  WS: "WST", // Samoa
  SM: "EUR", // San Marino
  ST: "STN", // Sao Tome and Principe
  SA: "SAR", // Saudi Arabia
  SN: "XOF", // Senegal
  RS: "RSD", // Serbia
  SC: "SCR", // Seychelles
  SL: "SLL", // Sierra Leone
  SG: "SGD", // Singapore
  SX: "ANG", // Sint Maarten (Dutch part)
  SK: "EUR", // Slovakia
  SI: "EUR", // Slovenia
  SB: "SBD", // Solomon Islands
  SO: "SOS", // Somalia
  ZA: "ZAR", // South Africa
  GS: "None", // South Georgia and the South Sandwich Islands
  SS: "SSP", // South Sudan
  ES: "EUR", // Spain
  LK: "LKR", // Sri Lanka
  SD: "SDG", // Sudan
  SR: "SRD", // Suriname
  SJ: "NOK", // Svalbard and Jan Mayen
  SZ: "SZL", // Eswatini
  SE: "SEK", // Sweden
  CH: "CHF", // Switzerland
  SY: "SYP", // Syria
  TW: "TWD", // Taiwan, Province of China
  TJ: "TJS", // Tajikistan
  TZ: "TZS", // Tanzania, United Republic of
  TH: "THB", // Thailand
  TL: "USD", // Timor-Leste
  TG: "XOF", // Togo
  TK: "NZD", // Tokelau
  TO: "TOP", // Tonga
  TT: "TTD", // Trinidad and Tobago
  TN: "TND", // Tunisia
  TR: "TRY", // Turkey
  TM: "TMT", // Turkmen
  TC: "USD", // Turks and Caicos Islands
  TV: "AUD", // Tuvalu
  UG: "UGX", // Uganda
  UA: "UAH", // Ukraine
  AE: "AED", // United Arab Emirates
  GB: "GBP", // United Kingdom
  US: "USD", // United States
  UM: "USD", // United States Minor Outlying Islands
  UY: "UYU", // Uruguay
  UZ: "UZS", // Uzbekistan
  VU: "VUV", // Vanuatu
  VE: "VES", // Venezuela, Bolivarian Republic of
  VN: "VND", // Vietnam
  VG: "USD", // Virgin Islands, British
  VI: "USD", // Virgin Islands, U.S.
  WF: "XPF", // Wallis and Futuna
  EH: "MAD", // Western Sahara
  YE: "YER", // Yemen
  ZM: "ZMW", // Zambia
  ZW: "ZWL", // Zimbabwe
};

let dropdowns = document.querySelectorAll(".selectTag");
let fromImage = document.querySelector(".fromImage");
let toImage = document.querySelector(".toImage");
let fromSelect = document.querySelector("#fromCurr");
let toSelect = document.querySelector("#toCurr");
for (select of dropdowns) {
  for (let code in countryData) {
    // let country=countryData[code];
    let option = document.createElement("option");
    option.innerText = countryData[code];
    option.value = code;
    option.classList.add("option");
    if (select.name === "from" && countryData[code] === "USD") {
      option.selected = "selected";
    } else if (select.name === "to" && countryData[code] === "INR") {
      option.selected = "selected";
    }
    select.append(option);
  }
  select.addEventListener("change", (evnt) => {
    updateFlag(evnt.target);
  });
}
const updateFlag = (elem) => {
    let currCode = elem.value;
    let flagUrl = `https://flagsapi.com/${currCode}/flat/64.png`;
    let flagimg = elem.parentElement.querySelector("img");
    flagimg.src = flagUrl;
  };
  
  let submit = document.querySelector(".submitBtn");
  submit.addEventListener("click", async (evnt) => {
    evnt.preventDefault();
  
    let fromcurr = countryData[fromSelect.value];
    let tocurr = countryData[toSelect.value];
  
    const base_url = `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/`;
    let url = `${base_url}/${fromcurr.toLowerCase()}/${tocurr.toLowerCase()}.json`;
  
    let inamount = document.querySelector("#amount");
    if (inamount.value === "" || inamount.value < 1 ) {
      inamount.value = 1;
    }
  
    let fetchRate = async () => {
      try {
        let res = await fetch(url);
        let data = await res.json();
        let exchangeRate = data[tocurr.toLowerCase()]; 
        let finalAmount = inamount.value * exchangeRate;
        let pera = document.querySelector(".info");
        pera.innerText = `${inamount.value} ${fromcurr} is equals to ${finalAmount} ${tocurr}    THANK YOU 😄`;
      } catch (error) {
        console.error("Error fetching exchange rate:", error);
      }
    };
  
    fetchRate();
  });
  

// const updateFlag = (elem) => {
//   let currCode = elem.value;
//   let countryCode = countryData[currCode];
//   let flagUrl = `https://flagsapi.com/${countryCode}/flat/64.png`;
//   console.log(countryCode);
//   let flagimg = elem.parentElement.querySelector("img");
//   flagimg.src = flagUrl;
// };
// let fromcurr = countryData[fromSelect.value];
// let tocurr = countryData[toSelect.value];

// let submit = document.querySelector(".submitBtn");
// submit.addEventListener("click", (evnt) => {
//   evnt.preventDefault();
//   const base_url = `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/`;
//   let url = `${base_url}/${fromcurr.toLowerCase()}/${tocurr.toLowerCase()}.json`;
//   let inamount = document.querySelector("#amount");
//   if (inamount.value === "" && inamount.value < 1) { /////////////////
//     inamount.value = 1;
//   }
//   let fetchRate = async () => {
//     let res = await fetch(url);
//     let data = await res.json();
//     let exchangeRate = data.tocurr.toLowerCase();    //////////////////
//     console.log(exchangeRate);
//     let finalAmount = inamount * exchangeRate;
//     let pera = document.querySelector(".info");
//     pera.innerText = ` ${inamount.value} ${fromcurr} is equals to ${finalAmount} ${tocurr} \n THANK YOU .`;
//   };
//   fetchRate();
// });
