'use strict';
import InputValidator from "../_utility/inputValidator";

export default {
    registrationFormInput: {
        type: Array,
        value: [
            {
                name: 'name',
                type: 'textbox',
                value: null,
                placeholder: '',
                label: 'Name *',
                validators: [InputValidator.mustNotBeEmpty],
                validation: {}
            },
            {
                name: 'last-name',
                type: 'textbox',
                value: null,
                placeholder: '',
                label: 'Last name *',
                validators: [InputValidator.mustNotBeEmpty],
                validation: {}
            },
            {
                name: 'country',
                type: 'select',
                values: [
                    { Afghanistan: "Afghanistan" },
                    { Albania: "Albania" },
                    { Algeria: "Algeria" },
                    { AmericanSamoa: "American Samoa" },
                    { Andorra: "Andorra" },
                    { Angola: "Angola" },
                    { Anguilla: "Anguilla" },
                    { AntiguaBarbuda: "Antigua &amp; Barbuda" },
                    { Argentina: "Argentina" },
                    { Armenia: "Armenia" },
                    { Aruba: "Aruba" },
                    { Australia: "Australia" },
                    { Austria: "Austria" },
                    { Azerbaijan: "Azerbaijan" },
                    { Bahamas: "Bahamas" },
                    { Bahrain: "Bahrain" },
                    { Bangladesh: "Bangladesh" },
                    { Barbados: "Barbados" },
                    { Belarus: "Belarus" },
                    { Belgium: "Belgium" },
                    { Belize: "Belize" },
                    { Benin: "Benin" },
                    { Bermuda: "Bermuda" },
                    { Bhutan: "Bhutan" },
                    { Bolivia: "Bolivia" },
                    { Bonaire: "Bonaire" },
                    { BosniaHerzegovina: "Bosnia &amp; Herzegovina" },
                    { Botswana: "Botswana" },
                    { Brazil: "Brazil" },
                    { BritishIndianOceanTer: "British Indian Ocean Ter" },
                    { Brunei: "Brunei" },
                    { Bulgaria: "Bulgaria" },
                    { BurkinaFaso: "Burkina Faso" },
                    { Burundi: "Burundi" },
                    { Cambodia: "Cambodia" },
                    { Cameroon: "Cameroon" },
                    { Canada: "Canada" },
                    { CanaryIslands: "Canary Islands" },
                    { CapeVerde: "Cape Verde" },
                    { CaymanIslands: "Cayman Islands" },
                    { CentralAfricanRepublic: "Central African Republic" },
                    { Chad: "Chad" },
                    { ChannelIslands: "Channel Islands" },
                    { Chile: "Chile" },
                    { China: "China" },
                    { ChristmasIsland: "Christmas Island" },
                    { CocosIsland: "Cocos Island" },
                    { Colombia: "Colombia" },
                    { Comoros: "Comoros" },
                    { Congo: "Congo" },
                    { CookIslands: "Cook Islands" },
                    { CostaRica: "Costa Rica" },
                    { CoteDIvoire: "Cote D'Ivoire" },
                    { Croatia: "Croatia" },
                    { Cuba: "Cuba" },
                    { Curacao: "Curacao" },
                    { Curaco: "Curaco" },
                    { Cyprus: "Cyprus" },
                    { CzechRepublic: "Czech Republic" },
                    { Denmark: "Denmark" },
                    { Djibouti: "Djibouti" },
                    { Dominica: "Dominica" },
                    { DominicanRepublic: "Dominican Republic" },
                    { EastTimor: "East Timor" },
                    { Ecuador: "Ecuador" },
                    { Egypt: "Egypt" },
                    { ElSalvador: "El Salvador" },
                    { EquatorialGuinea: "Equatorial Guinea" },
                    { Eritrea: "Eritrea" },
                    { Estonia: "Estonia" },
                    { Ethiopia: "Ethiopia" },
                    { FalklandIslands: "Falkland Islands" },
                    { FaroeIslands: "Faroe Islands" },
                    { Fiji: "Fiji" },
                    { Finland: "Finland" },
                    { France: "France" },
                    { FrenchGuiana: "French Guiana" },
                    { FrenchPolynesia: "French Polynesia" },
                    { FrenchSouthernTer: "French Southern Ter" },
                    { Gabon: "Gabon" },
                    { Gambia: "Gambia" },
                    { Georgia: "Georgia" },
                    { Germany: "Germany" },
                    { Ghana: "Ghana" },
                    { Gibraltar: "Gibraltar" },
                    { GreatBritain: "Great Britain" },
                    { Greece: "Greece" },
                    { Greenland: "Greenland" },
                    { Grenada: "Grenada" },
                    { Guadeloupe: "Guadeloupe" },
                    { Guam: "Guam" },
                    { Guatemala: "Guatemala" },
                    { Guinea: "Guinea" },
                    { Guyana: "Guyana" },
                    { Haiti: "Haiti" },
                    { Hawaii: "Hawaii" },
                    { Honduras: "Honduras" },
                    { HongKong: "Hong Kong" },
                    { Hungary: "Hungary" },
                    { Iceland: "Iceland" },
                    { India: "India" },
                    { Indonesia: "Indonesia" },
                    { Iran: "Iran" },
                    { Iraq: "Iraq" },
                    { Ireland: "Ireland" },
                    { IsleOfMan: "Isle of Man" },
                    { Israel: "Israel" },
                    { Italy: "Italy" },
                    { Jamaica: "Jamaica" },
                    { Japan: "Japan" },
                    { Jordan: "Jordan" },
                    { Kazakhstan: "Kazakhstan" },
                    { Kenya: "Kenya" },
                    { Kiribati: "Kiribati" },
                    { KoreaNorth: "Korea North" },
                    { KoreaSouth: "Korea South" },
                    { Kuwait: "Kuwait" },
                    { Kyrgyzstan: "Kyrgyzstan" },
                    { Laos: "Laos" },
                    { Latvia: "Latvia" },
                    { Lebanon: "Lebanon" },
                    { Lesotho: "Lesotho" },
                    { Liberia: "Liberia" },
                    { Libya: "Libya" },
                    { Liechtenstein: "Liechtenstein" },
                    { Lithuania: "Lithuania" },
                    { Luxembourg: "Luxembourg" },
                    { Macau: "Macau" },
                    { Macedonia: "Macedonia" },
                    { Madagascar: "Madagascar" },
                    { Malawi: "Malawi" },
                    { Malaysia: "Malaysia" },
                    { Maldives: "Maldives" },
                    { Mali: "Mali" },
                    { Malta: "Malta" },
                    { MarshallIslands: "Marshall Islands" },
                    { Martinique: "Martinique" },
                    { Mauritania: "Mauritania" },
                    { Mauritius: "Mauritius" },
                    { Mayotte: "Mayotte" },
                    { Mexico: "Mexico" },
                    { MidwayIslands: "Midway Islands" },
                    { Moldova: "Moldova" },
                    { Monaco: "Monaco" },
                    { Mongolia: "Mongolia" },
                    { Montserrat: "Montserrat" },
                    { Morocco: "Morocco" },
                    { Mozambique: "Mozambique" },
                    { Myanmar: "Myanmar" },
                    { Nambia: "Nambia" },
                    { Nauru: "Nauru" },
                    { Nepal: "Nepal" },
                    { NetherlandAntilles: "Netherland Antilles" },
                    { Netherlands: "Netherlands" },
                    { Nevis: "Nevis" },
                    { NewCaledonia: "New Caledonia" },
                    { NewZealand: "New Zealand" },
                    { Nicaragua: "Nicaragua" },
                    { Niger: "Niger" },
                    { Nigeria: "Nigeria" },
                    { Niue: "Niue" },
                    { NorfolkIsland: "Norfolk Island" },
                    { Norway: "Norway" },
                    { Oman: "Oman" },
                    { Pakistan: "Pakistan" },
                    { PalauIsland: "Palau Island" },
                    { Palestine: "Palestine" },
                    { Panama: "Panama" },
                    { PapuaNewGuinea: "Papua New Guinea" },
                    { Paraguay: "Paraguay" },
                    { Peru: "Peru" },
                    { Philippines: "Philippines" },
                    { Phillipines: "Phillipines" },
                    { PitcairnIsland: "Pitcairn Island" },
                    { Poland: "Poland" },
                    { Portugal: "Portugal" },
                    { PuertoRico: "Puerto Rico" },
                    { Qatar: "Qatar" },
                    { RepublicOfMontenegro: "Republic of Montenegro" },
                    { RepublicOfSerbia: "Republic of Serbia" },
                    { Reunion: "Reunion" },
                    { Romania: "Romania" },
                    { Russia: "Russia" },
                    { Rwanda: "Rwanda" },
                    { Saipan: "Saipan" },
                    { Samoa: "Samoa" },
                    { SamoaAmerican: "Samoa American" },
                    { SanMarino: "San Marino" },
                    { SaoTomePrincipe: "Sao Tome &amp; Principe" },
                    { SaudiArabia: "Saudi Arabia" },
                    { Senegal: "Senegal" },
                    { Serbia: "Serbia" },
                    { Seychelles: "Seychelles" },
                    { SierraLeone: "Sierra Leone" },
                    { Singapore: "Singapore" },
                    { Slovakia: "Slovakia" },
                    { Slovenia: "Slovenia" },
                    { SolomonIslands: "Solomon Islands" },
                    { Somalia: "Somalia" },
                    { SouthAfrica: "South Africa" },
                    { Spain: "Spain" },
                    { SriLanka: "Sri Lanka" },
                    { StBarthelemy: "St Barthelemy" },
                    { StEustatius: "St Eustatius" },
                    { StHelena: "St Helena" },
                    { StKittsNevis: "St Kitts-Nevis" },
                    { StLucia: "St Lucia" },
                    { StMaarten: "St Maarten" },
                    { StPierrMiquelon: "St Pierre &amp; Miquelon" },
                    { StVincentGrenadines: "St Vincent &amp; Grenadines" },
                    { Sudan: "Sudan" },
                    { Suriname: "Suriname" },
                    { Swaziland: "Swaziland" },
                    { Sweden: "Sweden" },
                    { Switzerland: "Switzerland" },
                    { Syria: "Syria" },
                    { Tahiti: "Tahiti" },
                    { Taiwan: "Taiwan" },
                    { Tajikistan: "Tajikistan" },
                    { Tanzania: "Tanzania" },
                    { Thailand: "Thailand" },
                    { Togo: "Togo" },
                    { Tokelau: "Tokelau" },
                    { Tonga: "Tonga" },
                    { TrinidadTobago: "Trinidad &amp; Tobago" },
                    { Tunisia: "Tunisia" },
                    { Turkey: "Turkey" },
                    { Turkmenistan: "Turkmenistan" },
                    { TurksCaicosIs: "Turks &amp; Caicos Is" },
                    { Tuvalu: "Tuvalu" },
                    { Uganda: "Uganda" },
                    { Ukraine: "Ukraine" },
                    { UnitedArabEmirates: "United Arab Emirates" }, ,
                    { UnitedKingdom: "United Kingdom" },
                    { UnitedStatesOfAmerica: "United States of America" },
                    { Uraguay: "Uraguay" },
                    { Uruguay: "Uruguay" },
                    { Uzbekistan: "Uzbekistan" },
                    { Vanuatu: "Vanuatu" },
                    { VaticanCityState: "Vatican City State" },
                    { Venezuela: "Venezuela" },
                    { Vietnam: "Vietnam" },
                    { VirginIslandsBrit: "Virgin Islands (Brit)" },
                    { VirginIslandsUsa: "Virgin Islands (USA)" },
                    { WakeIsland: "Wake Island" },
                    { WallisFutanaIs: "Wallis &amp; Futana Is" },
                    { Yemen: "Yemen" },
                    { Zaire: "Zaire" },
                    { Zambia: "Zambia" },
                    { Zimbabwe: "Zimbabwe" }
                ],
                label: 'Country',
                validators: [],
                validation: {}
            },
            {
                name: 'language',
                type: 'select',
                values: [
                    { AF: "Afrikaans" },
                    { SQ: "Albanian" },
                    { AR: "Arabic" },
                    { HY: "Armenian" },
                    { EU: "Basque" },
                    { BN: "Bengali" },
                    { BG: "Bulgarian" },
                    { CA: "Catalan" },
                    { KM: "Cambodian" },
                    { ZH: "Chinese (Mandarin)" },
                    { HR: "Croatian" },
                    { CS: "Czech" },
                    { DA: "Danish" },
                    { NL: "Dutch" },
                    { EN: "English" },
                    { ET: "Estonian" },
                    { FJ: "Fiji" },
                    { FI: "Finnish" },
                    { FR: "French" },
                    { KA: "Georgian" },
                    { DE: "German" },
                    { EL: "Greek" },
                    { GU: "Gujarati" },
                    { HE: "Hebrew" },
                    { HI: "Hindi" },
                    { HU: "Hungarian" },
                    { IS: "Icelandic" },
                    { ID: "Indonesian" },
                    { GA: "Irish" },
                    { IT: "Italian" },
                    { JA: "Japanese" },
                    { JW: "Javanese" },
                    { KO: "Korean" },
                    { LA: "Latin" },
                    { LV: "Latvian" },
                    { LT: "Lithuanian" },
                    { MK: "Macedonian" },
                    { MS: "Malay" },
                    { ML: "Malayalam" },
                    { MT: "Maltese" },
                    { MI: "Maori" },
                    { MR: "Marathi" },
                    { MN: "Mongolian" },
                    { NE: "Nepali" },
                    { NO: "Norwegian" },
                    { FA: "Persian" },
                    { PL: "Polish" },
                    { PT: "Portuguese" },
                    { PA: "Punjabi" },
                    { QU: "Quechua" },
                    { RO: "Romanian" },
                    { RU: "Russian" },
                    { SM: "Samoan" },
                    { SR: "Serbian" },
                    { SK: "Slovak" },
                    { SL: "Slovenian" },
                    { ES: "Spanish" },
                    { SW: "Swahili" },
                    { SV: "Swedish" },
                    { TA: "Tamil" },
                    { TT: "Tatar" },
                    { TE: "Telugu" },
                    { TH: "Thai" },
                    { BO: "Tibetan" },
                    { TO: "Tonga" },
                    { TR: "Turkish" },
                    { UK: "Ukrainian" },
                    { UR: "Urdu" },
                    { UZ: "Uzbek" },
                    { VI: "Vietnamese" },
                    { CY: "Welsh" },
                    { XH: "Xhosa" }
                ],
                label: 'Language',
                validators: [],
                validation: {}
            },
            {
                name: 'title',
                label: 'Title',
                values: [
                    { mr : 'Mr'},
                    { mrs: 'Mrs'},
                    { miss: 'Miss'}
                ]
            }
        ]
    }
  
}