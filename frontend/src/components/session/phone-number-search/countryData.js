import fetchCountryFlags from './fetchCountryFlags';

const countryData = {
      "93": {
          "name": "Afghanistan",
          "flag": "https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_the_Taliban.svg",
          "alpha2Code": "AF",
          "currency": "AFN",
          "languages": "ps, uz, tk"
        }
      ,
        "358": {
          "name": "Åland Islands",
          "flag": "https://flagcdn.com/ax.svg",
          "alpha2Code": "AX",
          "currency": "EUR",
          "languages": "sv"
        }
      ,
        "355": {
          "name": "Albania",
          "flag": "https://flagcdn.com/al.svg",
          "alpha2Code": "AL",
          "currency": "ALL",
          "languages": "sq"
        }
      ,
        "213": {
          "name": "Algeria",
          "flag": "https://flagcdn.com/dz.svg",
          "alpha2Code": "DZ",
          "currency": "DZD",
          "languages": "ar"
        }
      ,
        "1": {
          "name": "American Samoa",
          "flag": "https://flagcdn.com/as.svg",
          "alpha2Code": "AS",
          "currency": "USD",
          "languages": "en, sm"
        }
      ,
        "376": {
          "name": "Andorra",
          "flag": "https://flagcdn.com/ad.svg",
          "alpha2Code": "AD",
          "currency": "EUR",
          "languages": "ca"
        }
      ,
        "244": {
          "name": "Angola",
          "flag": "https://flagcdn.com/ao.svg",
          "alpha2Code": "AO",
          "currency": "AOA",
          "languages": "pt"
        }
      ,
        "1": {
          "name": "Anguilla",
          "flag": "https://flagcdn.com/ai.svg",
          "alpha2Code": "AI",
          "currency": "XCD",
          "languages": "en"
        }
      ,
        "672": {
          "name": "Antarctica",
          "flag": "https://flagcdn.com/aq.svg",
          "alpha2Code": "AQ",
          "currency": "N/A",
          "languages": "en, ru"
        }
      ,
        "1": {
          "name": "Antigua and Barbuda",
          "flag": "https://flagcdn.com/ag.svg",
          "alpha2Code": "AG",
          "currency": "XCD",
          "languages": "en"
        }
      ,
        "54": {
          "name": "Argentina",
          "flag": "https://flagcdn.com/ar.svg",
          "alpha2Code": "AR",
          "currency": "ARS",
          "languages": "es, gn"
        }
      ,
        "374": {
          "name": "Armenia",
          "flag": "https://flagcdn.com/am.svg",
          "alpha2Code": "AM",
          "currency": "AMD",
          "languages": "hy"
        }
      ,
        "297": {
          "name": "Aruba",
          "flag": "https://flagcdn.com/aw.svg",
          "alpha2Code": "AW",
          "currency": "AWG",
          "languages": "nl, pa"
        }
      ,
        "61": {
          "name": "Australia",
          "flag": "https://flagcdn.com/au.svg",
          "alpha2Code": "AU",
          "currency": "AUD",
          "languages": "en"
        }
      ,
        "43": {
          "name": "Austria",
          "flag": "https://flagcdn.com/at.svg",
          "alpha2Code": "AT",
          "currency": "EUR",
          "languages": "de"
        }
      ,
        "994": {
          "name": "Azerbaijan",
          "flag": "https://flagcdn.com/az.svg",
          "alpha2Code": "AZ",
          "currency": "AZN",
          "languages": "az"
        }
      ,
        "1": {
          "name": "Bahamas",
          "flag": "https://flagcdn.com/bs.svg",
          "alpha2Code": "BS",
          "currency": "BSD",
          "languages": "en"
        }
      ,
        "973": {
          "name": "Bahrain",
          "flag": "https://flagcdn.com/bh.svg",
          "alpha2Code": "BH",
          "currency": "BHD",
          "languages": "ar"
        }
      ,
        "880": {
          "name": "Bangladesh",
          "flag": "https://flagcdn.com/bd.svg",
          "alpha2Code": "BD",
          "currency": "BDT",
          "languages": "bn"
        }
      ,
        "1": {
          "name": "Barbados",
          "flag": "https://flagcdn.com/bb.svg",
          "alpha2Code": "BB",
          "currency": "BBD",
          "languages": "en"
        }
      ,
        "375": {
          "name": "Belarus",
          "flag": "https://flagcdn.com/by.svg",
          "alpha2Code": "BY",
          "currency": "BYN",
          "languages": "be, ru"
        }
      ,
        "32": {
          "name": "Belgium",
          "flag": "https://flagcdn.com/be.svg",
          "alpha2Code": "BE",
          "currency": "EUR",
          "languages": "nl, fr, de"
        }
      ,
        "501": {
          "name": "Belize",
          "flag": "https://flagcdn.com/bz.svg",
          "alpha2Code": "BZ",
          "currency": "BZD",
          "languages": "en, es"
        }
      ,
        "229": {
          "name": "Benin",
          "flag": "https://flagcdn.com/bj.svg",
          "alpha2Code": "BJ",
          "currency": "XOF",
          "languages": "fr"
        }
      ,
        "1": {
          "name": "Bermuda",
          "flag": "https://flagcdn.com/bm.svg",
          "alpha2Code": "BM",
          "currency": "BMD",
          "languages": "en"
        }
      ,
        "975": {
          "name": "Bhutan",
          "flag": "https://flagcdn.com/bt.svg",
          "alpha2Code": "BT",
          "currency": "BTN",
          "languages": "dz"
        }
      ,
        "591": {
          "name": "Bolivia (Plurinational State of)",
          "flag": "https://flagcdn.com/bo.svg",
          "alpha2Code": "BO",
          "currency": "BOB",
          "languages": "es, ay, qu"
        }
      ,
        "599": {
          "name": "Bonaire, Sint Eustatius and Saba",
          "flag": "https://flagcdn.com/bq.svg",
          "alpha2Code": "BQ",
          "currency": "USD",
          "languages": "nl"
        }
      ,
        "387": {
          "name": "Bosnia and Herzegovina",
          "flag": "https://flagcdn.com/ba.svg",
          "alpha2Code": "BA",
          "currency": "BAM",
          "languages": "bs, hr, sr"
        }
      ,
        "267": {
          "name": "Botswana",
          "flag": "https://flagcdn.com/bw.svg",
          "alpha2Code": "BW",
          "currency": "BWP",
          "languages": "en, tn"
        }
      ,
        "47": {
          "name": "Bouvet Island",
          "flag": "https://flagcdn.com/bv.svg",
          "alpha2Code": "BV",
          "currency": "NOK",
          "languages": "no, nb, nn"
        }
      ,
        "55": {
          "name": "Brazil",
          "flag": "https://flagcdn.com/br.svg",
          "alpha2Code": "BR",
          "currency": "BRL",
          "languages": "pt"
        }
      ,
        "246": {
          "name": "British Indian Ocean Territory",
          "flag": "https://flagcdn.com/io.svg",
          "alpha2Code": "IO",
          "currency": "USD",
          "languages": "en"
        }
      ,
        "246": {
          "name": "United States Minor Outlying Islands",
          "flag": "https://flagcdn.com/um.svg",
          "alpha2Code": "UM",
          "currency": "GBP",
          "languages": "en"
        }
      ,
        "1": {
          "name": "Virgin Islands (British)",
          "flag": "https://flagcdn.com/vg.svg",
          "alpha2Code": "VG",
          "currency": "USD",
          "languages": "en"
        }
      ,
        "1 340": {
          "name": "Virgin Islands (U.S.)",
          "flag": "https://flagcdn.com/vi.svg",
          "alpha2Code": "VI",
          "currency": "USD",
          "languages": "en"
        }
      ,
        "673": {
          "name": "Brunei Darussalam",
          "flag": "https://flagcdn.com/bn.svg",
          "alpha2Code": "BN",
          "currency": "BND",
          "languages": "ms"
        }
      ,
        "359": {
          "name": "Bulgaria",
          "flag": "https://flagcdn.com/bg.svg",
          "alpha2Code": "BG",
          "currency": "BGN",
          "languages": "bg"
        }
      ,
        "226": {
          "name": "Burkina Faso",
          "flag": "https://flagcdn.com/bf.svg",
          "alpha2Code": "BF",
          "currency": "XOF",
          "languages": "fr, ff"
        }
      ,
        "257": {
          "name": "Burundi",
          "flag": "https://flagcdn.com/bi.svg",
          "alpha2Code": "BI",
          "currency": "BIF",
          "languages": "fr, rn"
        }
      ,
        "855": {
          "name": "Cambodia",
          "flag": "https://flagcdn.com/kh.svg",
          "alpha2Code": "KH",
          "currency": "KHR",
          "languages": "km"
        }
      ,
        "237": {
          "name": "Cameroon",
          "flag": "https://flagcdn.com/cm.svg",
          "alpha2Code": "CM",
          "currency": "XAF",
          "languages": "en, fr"
        }
      ,
        "1": {
          "name": "Canada",
          "flag": "https://flagcdn.com/ca.svg",
          "alpha2Code": "CA",
          "currency": "CAD",
          "languages": "en, fr"
        }
      ,
        "238": {
          "name": "Cabo Verde",
          "flag": "https://flagcdn.com/cv.svg",
          "alpha2Code": "CV",
          "currency": "CVE",
          "languages": "pt"
        }
      ,
        "1": {
          "name": "Cayman Islands",
          "flag": "https://flagcdn.com/ky.svg",
          "alpha2Code": "KY",
          "currency": "KYD",
          "languages": "en"
        }
      ,
        "236": {
          "name": "Central African Republic",
          "flag": "https://flagcdn.com/cf.svg",
          "alpha2Code": "CF",
          "currency": "XAF",
          "languages": "fr, sg"
        }
      ,
        "235": {
          "name": "Chad",
          "flag": "https://flagcdn.com/td.svg",
          "alpha2Code": "TD",
          "currency": "XAF",
          "languages": "fr, ar"
        }
      ,
        "56": {
          "name": "Chile",
          "flag": "https://flagcdn.com/cl.svg",
          "alpha2Code": "CL",
          "currency": "CLP",
          "languages": "es"
        }
      ,
        "86": {
          "name": "China",
          "flag": "https://flagcdn.com/cn.svg",
          "alpha2Code": "CN",
          "currency": "CNY",
          "languages": "zh"
        }    
      ,
        "57": {
          "name": "Colombia",
          "flag": "https://flagcdn.com/co.svg",
          "alpha2Code": "CO",
          "currency": "COP",
          "languages": "es"
        }
      ,
        "269": {
          "name": "Comoros",
          "flag": "https://flagcdn.com/km.svg",
          "alpha2Code": "KM",
          "currency": "KMF",
          "languages": "ar, fr"
        }
      ,
        "242": {
          "name": "Congo",
          "flag": "https://flagcdn.com/cg.svg",
          "alpha2Code": "CG",
          "currency": "XAF",
          "languages": "fr, ln"
        }
      ,
        "243": {
          "name": "Congo (Democratic Republic of the)",
          "flag": "https://flagcdn.com/cd.svg",
          "alpha2Code": "CD",
          "currency": "CDF",
          "languages": "fr, ln, kg, sw, lu"
        }
      ,
        "682": {
          "name": "Cook Islands",
          "flag": "https://flagcdn.com/ck.svg",
          "alpha2Code": "CK",
          "currency": "NZD",
          "languages": "en, "
        }
      ,
        "506": {
          "name": "Costa Rica",
          "flag": "https://flagcdn.com/cr.svg",
          "alpha2Code": "CR",
          "currency": "CRC",
          "languages": "es"
        }
      ,
        "385": {
          "name": "Croatia",
          "flag": "https://flagcdn.com/hr.svg",
          "alpha2Code": "HR",
          "currency": "EUR",
          "languages": "hr"
        }
      ,
        "53": {
          "name": "Cuba",
          "flag": "https://flagcdn.com/cu.svg",
          "alpha2Code": "CU",
          "currency": "CUC",
          "languages": "es"
        }
      ,
        "599": {
          "name": "Curaçao",
          "flag": "https://flagcdn.com/cw.svg",
          "alpha2Code": "CW",
          "currency": "ANG",
          "languages": "nl, pa, en"
        }
      ,
        "357": {
          "name": "Cyprus",
          "flag": "https://flagcdn.com/cy.svg",
          "alpha2Code": "CY",
          "currency": "EUR",
          "languages": "el, tr, hy"
        }
      ,
        "420": {
          "name": "Czech Republic",
          "flag": "https://flagcdn.com/cz.svg",
          "alpha2Code": "CZ",
          "currency": "CZK",
          "languages": "cs, sk"
        }
      ,
        "45": {
          "name": "Denmark",
          "flag": "https://flagcdn.com/dk.svg",
          "alpha2Code": "DK",
          "currency": "DKK",
          "languages": "da"
        }
      ,
        "253": {
          "name": "Djibouti",
          "flag": "https://flagcdn.com/dj.svg",
          "alpha2Code": "DJ",
          "currency": "DJF",
          "languages": "fr, ar"
        }
      ,
        "1": {
          "name": "Dominica",
          "flag": "https://flagcdn.com/dm.svg",
          "alpha2Code": "DM",
          "currency": "XCD",
          "languages": "en"
        }
      ,
        "1": {
          "name": "Dominican Republic",
          "flag": "https://flagcdn.com/do.svg",
          "alpha2Code": "DO",
          "currency": "DOP",
          "languages": "es"
        }
      ,
        "593": {
          "name": "Ecuador",
          "flag": "https://flagcdn.com/ec.svg",
          "alpha2Code": "EC",
          "currency": "USD",
          "languages": "es"
        }
      ,
        "20": {
          "name": "Egypt",
          "flag": "https://flagcdn.com/eg.svg",
          "alpha2Code": "EG",
          "currency": "EGP",
          "languages": "ar"
        }
      ,
        "503": {
          "name": "El Salvador",
          "flag": "https://flagcdn.com/sv.svg",
          "alpha2Code": "SV",
          "currency": "USD",
          "languages": "es"
        }
      ,
        "240": {
          "name": "Equatorial Guinea",
          "flag": "https://flagcdn.com/gq.svg",
          "alpha2Code": "GQ",
          "currency": "XAF",
          "languages": "es, fr, pt, "
        }
      ,
        "291": {
          "name": "Eritrea",
          "flag": "https://flagcdn.com/er.svg",
          "alpha2Code": "ER",
          "currency": "ERN",
          "languages": "ti, ar, en, , , , , , aa"
        }
      ,
        "372": {
          "name": "Estonia",
          "flag": "https://flagcdn.com/ee.svg",
          "alpha2Code": "EE",
          "currency": "EUR",
          "languages": "et"
        }
      ,
        "251": {
          "name": "Ethiopia",
          "flag": "https://flagcdn.com/et.svg",
          "alpha2Code": "ET",
          "currency": "ETB",
          "languages": "am"
        }
      ,
        "500": {
          "name": "Falkland Islands (Malvinas)",
          "flag": "https://flagcdn.com/fk.svg",
          "alpha2Code": "FK",
          "currency": "FKP",
          "languages": "en"
        }
      ,
        "298": {
          "name": "Faroe Islands",
          "flag": "https://flagcdn.com/fo.svg",
          "alpha2Code": "FO",
          "currency": "DKK",
          "languages": "fo"
        }
      ,
        "679": {
          "name": "Fiji",
          "flag": "https://flagcdn.com/fj.svg",
          "alpha2Code": "FJ",
          "currency": "FJD",
          "languages": "en, fj, , "
        }
      ,
        "358": {
          "name": "Finland",
          "flag": "https://flagcdn.com/fi.svg",
          "alpha2Code": "FI",
          "currency": "EUR",
          "languages": "fi, sv"
        }
      ,
        "33": {
          "name": "France",
          "flag": "https://flagcdn.com/fr.svg",
          "alpha2Code": "FR",
          "currency": "EUR",
          "languages": "fr"
        }
      ,
        "594": {
          "name": "French Guiana",
          "flag": "https://flagcdn.com/gf.svg",
          "alpha2Code": "GF",
          "currency": "EUR",
          "languages": "fr"
        }
      ,
        "689": {
          "name": "French Polynesia",
          "flag": "https://flagcdn.com/pf.svg",
          "alpha2Code": "PF",
          "currency": "XPF",
          "languages": "fr"
        }
      ,
        "262": {
          "name": "French Southern Territories",
          "flag": "https://flagcdn.com/tf.svg",
          "alpha2Code": "TF",
          "currency": "EUR",
          "languages": "fr"
        }
      ,
        "241": {
          "name": "Gabon",
          "flag": "https://flagcdn.com/ga.svg",
          "alpha2Code": "GA",
          "currency": "XAF",
          "languages": "fr"
        }
      ,
        "220": {
          "name": "Gambia",
          "flag": "https://flagcdn.com/gm.svg",
          "alpha2Code": "GM",
          "currency": "GMD",
          "languages": "en"
        }
      ,
        "995": {
          "name": "Georgia",
          "flag": "https://flagcdn.com/ge.svg",
          "alpha2Code": "GE",
          "currency": "GEL",
          "languages": "ka"
        }
      ,
        "49": {
          "name": "Germany",
          "flag": "https://flagcdn.com/de.svg",
          "alpha2Code": "DE",
          "currency": "EUR",
          "languages": "de"
        }
      ,
        "233": {
          "name": "Ghana",
          "flag": "https://flagcdn.com/gh.svg",
          "alpha2Code": "GH",
          "currency": "GHS",
          "languages": "en"
        }
      ,
        "350": {
          "name": "Gibraltar",
          "flag": "https://flagcdn.com/gi.svg",
          "alpha2Code": "GI",
          "currency": "GIP",
          "languages": "en"
        }
      ,
        "30": {
          "name": "Greece",
          "flag": "https://flagcdn.com/gr.svg",
          "alpha2Code": "GR",
          "currency": "EUR",
          "languages": "el"
        }
      ,
        "299": {
          "name": "Greenland",
          "flag": "https://flagcdn.com/gl.svg",
          "alpha2Code": "GL",
          "currency": "DKK",
          "languages": "kl"
        }
      ,
        "1": {
          "name": "Grenada",
          "flag": "https://flagcdn.com/gd.svg",
          "alpha2Code": "GD",
          "currency": "XCD",
          "languages": "en"
        }
      ,
        "590": {
          "name": "Guadeloupe",
          "flag": "https://flagcdn.com/gp.svg",
          "alpha2Code": "GP",
          "currency": "EUR",
          "languages": "fr"
        }
      ,
        "1": {
          "name": "Guam",
          "flag": "https://flagcdn.com/gu.svg",
          "alpha2Code": "GU",
          "currency": "USD",
          "languages": "en, ch, es"
        }
      ,
        "502": {
          "name": "Guatemala",
          "flag": "https://flagcdn.com/gt.svg",
          "alpha2Code": "GT",
          "currency": "GTQ",
          "languages": "es"
        }
      ,
        "44": {
          "name": "Guernsey",
          "flag": "https://flagcdn.com/gg.svg",
          "alpha2Code": "GG",
          "currency": "GBP",
          "languages": "en, fr"
        }
      ,
        "224": {
          "name": "Guinea",
          "flag": "https://flagcdn.com/gn.svg",
          "alpha2Code": "GN",
          "currency": "GNF",
          "languages": "fr, ff"
        }
      ,
        "245": {
          "name": "Guinea-Bissau",
          "flag": "https://flagcdn.com/gw.svg",
          "alpha2Code": "GW",
          "currency": "XOF",
          "languages": "pt"
        }
      ,
        "592": {
          "name": "Guyana",
          "flag": "https://flagcdn.com/gy.svg",
          "alpha2Code": "GY",
          "currency": "GYD",
          "languages": "en"
        }
      ,
        "509": {
          "name": "Haiti",
          "flag": "https://flagcdn.com/ht.svg",
          "alpha2Code": "HT",
          "currency": "HTG",
          "languages": "fr, ht"
        }
      ,
        "672": {
          "name": "Heard Island and McDonald Islands",
          "flag": "https://flagcdn.com/hm.svg",
          "alpha2Code": "HM",
          "currency": "AUD",
          "languages": "en"
        }
      ,
        "379": {
          "name": "Vatican City",
          "flag": "https://flagcdn.com/va.svg",
          "alpha2Code": "VA",
          "currency": "EUR",
          "languages": "la, it, fr, de"
        }
      ,
        "504": {
          "name": "Honduras",
          "flag": "https://flagcdn.com/hn.svg",
          "alpha2Code": "HN",
          "currency": "HNL",
          "languages": "es"
        }
      ,
        "36": {
          "name": "Hungary",
          "flag": "https://flagcdn.com/hu.svg",
          "alpha2Code": "HU",
          "currency": "HUF",
          "languages": "hu"
        }
      ,
        "852": {
          "name": "Hong Kong",
          "flag": "https://flagcdn.com/hk.svg",
          "alpha2Code": "HK",
          "currency": "HKD",
          "languages": "en, zh"
        }
      ,
        "354": {
          "name": "Iceland",
          "flag": "https://flagcdn.com/is.svg",
          "alpha2Code": "IS",
          "currency": "ISK",
          "languages": "is"
        }
      ,
        "91": {
          "name": "India",
          "flag": "https://flagcdn.com/in.svg",
          "alpha2Code": "IN",
          "currency": "INR",
          "languages": "hi, en"
        }
      ,
        "62": {
          "name": "Indonesia",
          "flag": "https://flagcdn.com/id.svg",
          "alpha2Code": "ID",
          "currency": "IDR",
          "languages": "id"
        }
      ,
        "225": {
          "name": "Ivory Coast",
          "flag": "https://flagcdn.com/ci.svg",
          "alpha2Code": "CI",
          "currency": "XOF",
          "languages": "fr"
        }
      ,
        "98": {
          "name": "Iran (Islamic Republic of)",
          "flag": "https://flagcdn.com/ir.svg",
          "alpha2Code": "IR",
          "currency": "IRR",
          "languages": "fa"
        }
      ,
        "964": {
          "name": "Iraq",
          "flag": "https://flagcdn.com/iq.svg",
          "alpha2Code": "IQ",
          "currency": "IQD",
          "languages": "ar, ku"
        }
      ,
        "353": {
          "name": "Ireland",
          "flag": "https://flagcdn.com/ie.svg",
          "alpha2Code": "IE",
          "currency": "EUR",
          "languages": "ga, en"
        }
      ,
        "44": {
          "name": "Isle of Man",
          "flag": "https://flagcdn.com/im.svg",
          "alpha2Code": "IM",
          "currency": "GBP",
          "languages": "en, gv"
        }
      ,
        "972": {
          "name": "Israel",
          "flag": "https://flagcdn.com/il.svg",
          "alpha2Code": "IL",
          "currency": "ILS",
          "languages": "he, ar"
        }
      ,
        "39": {
          "name": "Italy",
          "flag": "https://flagcdn.com/it.svg",
          "alpha2Code": "IT",
          "currency": "EUR",
          "languages": "it"
        }
      ,
        "1": {
          "name": "Jamaica",
          "flag": "https://flagcdn.com/jm.svg",
          "alpha2Code": "JM",
          "currency": "JMD",
          "languages": "en"
        }
      ,
        "81": {
          "name": "Japan",
          "flag": "https://flagcdn.com/jp.svg",
          "alpha2Code": "JP",
          "currency": "JPY",
          "languages": "ja"
        }
      ,
        "44": {
          "name": "Jersey",
          "flag": "https://flagcdn.com/je.svg",
          "alpha2Code": "JE",
          "currency": "GBP",
          "languages": "en, fr"
        }
      ,
        "962": {
          "name": "Jordan",
          "flag": "https://flagcdn.com/jo.svg",
          "alpha2Code": "JO",
          "currency": "JOD",
          "languages": "ar"
        }
      ,
        "76": {
          "name": "Kazakhstan",
          "flag": "https://flagcdn.com/kz.svg",
          "alpha2Code": "KZ",
          "currency": "KZT",
          "languages": "kk, ru"
        }
      ,
        "254": {
          "name": "Kenya",
          "flag": "https://flagcdn.com/ke.svg",
          "alpha2Code": "KE",
          "currency": "KES",
          "languages": "en, sw"
        }
      ,
        "686": {
          "name": "Kiribati",
          "flag": "https://flagcdn.com/ki.svg",
          "alpha2Code": "KI",
          "currency": "AUD",
          "languages": "en"
        }
      ,
        "965": {
          "name": "Kuwait",
          "flag": "https://flagcdn.com/kw.svg",
          "alpha2Code": "KW",
          "currency": "KWD",
          "languages": "ar"
        }
      ,
        "996": {
          "name": "Kyrgyzstan",
          "flag": "https://flagcdn.com/kg.svg",
          "alpha2Code": "KG",
          "currency": "KGS",
          "languages": "ky, ru"
        }
      ,
        "856": {
          "name": "Lao People's Democratic Republic",
          "flag": "https://flagcdn.com/la.svg",
          "alpha2Code": "LA",
          "currency": "LAK",
          "languages": "lo"
        }
      ,
        "371": {
          "name": "Latvia",
          "flag": "https://flagcdn.com/lv.svg",
          "alpha2Code": "LV",
          "currency": "EUR",
          "languages": "lv"
        }
      ,
        "961": {
          "name": "Lebanon",
          "flag": "https://flagcdn.com/lb.svg",
          "alpha2Code": "LB",
          "currency": "LBP",
          "languages": "ar, fr"
        }
      ,
        "266": {
          "name": "Lesotho",
          "flag": "https://flagcdn.com/ls.svg",
          "alpha2Code": "LS",
          "currency": "LSL",
          "languages": "en, st"
        }
      ,
        "231": {
          "name": "Liberia",
          "flag": "https://flagcdn.com/lr.svg",
          "alpha2Code": "LR",
          "currency": "LRD",
          "languages": "en"
        }
      ,
        "218": {
          "name": "Libya",
          "flag": "https://flagcdn.com/ly.svg",
          "alpha2Code": "LY",
          "currency": "LYD",
          "languages": "ar"
        }
      ,
        "423": {
          "name": "Liechtenstein",
          "flag": "https://flagcdn.com/li.svg",
          "alpha2Code": "LI",
          "currency": "CHF",
          "languages": "de"
        }
      ,
        "370": {
          "name": "Lithuania",
          "flag": "https://flagcdn.com/lt.svg",
          "alpha2Code": "LT",
          "currency": "EUR",
          "languages": "lt"
        }
      ,
        "352": {
          "name": "Luxembourg",
          "flag": "https://flagcdn.com/lu.svg",
          "alpha2Code": "LU",
          "currency": "EUR",
          "languages": "fr, de, lb"
        }
      ,
        "853": {
          "name": "Macao",
          "flag": "https://flagcdn.com/mo.svg",
          "alpha2Code": "MO",
          "currency": "MOP",
          "languages": "zh, pt"
        }
      ,
        "389": {
          "name": "North Macedonia",
          "flag": "https://flagcdn.com/mk.svg",
          "alpha2Code": "MK",
          "currency": "MKD",
          "languages": "mk"
        }
      ,
        "261": {
          "name": "Madagascar",
          "flag": "https://flagcdn.com/mg.svg",
          "alpha2Code": "MG",
          "currency": "MGA",
          "languages": "fr, mg"
        }
      ,
        "265": {
          "name": "Malawi",
          "flag": "https://flagcdn.com/mw.svg",
          "alpha2Code": "MW",
          "currency": "MWK",
          "languages": "en, ny"
        }
      ,
        "60": {
          "name": "Malaysia",
          "flag": "https://flagcdn.com/my.svg",
          "alpha2Code": "MY",
          "currency": "MYR",
          "languages": "ms"
        }
      ,
        "960": {
          "name": "Maldives",
          "flag": "https://flagcdn.com/mv.svg",
          "alpha2Code": "MV",
          "currency": "MVR",
          "languages": "dv"
        }
      ,
        "223": {
          "name": "Mali",
          "flag": "https://flagcdn.com/ml.svg",
          "alpha2Code": "ML",
          "currency": "XOF",
          "languages": "fr"
        }
      ,
        "356": {
          "name": "Malta",
          "flag": "https://flagcdn.com/mt.svg",
          "alpha2Code": "MT",
          "currency": "EUR",
          "languages": "mt, en"
        }
      ,
        "692": {
          "name": "Marshall Islands",
          "flag": "https://flagcdn.com/mh.svg",
          "alpha2Code": "MH",
          "currency": "USD",
          "languages": "en, mh"
        }
      ,
        "596": {
          "name": "Martinique",
          "flag": "https://flagcdn.com/mq.svg",
          "alpha2Code": "MQ",
          "currency": "EUR",
          "languages": "fr"
        }
      ,
        "222": {
          "name": "Mauritania",
          "flag": "https://flagcdn.com/mr.svg",
          "alpha2Code": "MR",
          "currency": "MRO",
          "languages": "ar"
        }
      ,
        "230": {
          "name": "Mauritius",
          "flag": "https://flagcdn.com/mu.svg",
          "alpha2Code": "MU",
          "currency": "MUR",
          "languages": "en"
        }
      ,
        "262": {
          "name": "Mayotte",
          "flag": "https://flagcdn.com/yt.svg",
          "alpha2Code": "YT",
          "currency": "EUR",
          "languages": "fr"
        }
      ,
        "52": {
          "name": "Mexico",
          "flag": "https://flagcdn.com/mx.svg",
          "alpha2Code": "MX",
          "currency": "MXN",
          "languages": "es"
        }
      ,
        "691": {
          "name": "Micronesia (Federated States of)",
          "flag": "https://flagcdn.com/fm.svg",
          "alpha2Code": "FM",
          "currency": "USD",
          "languages": "en"
        }
      ,
        "373": {
          "name": "Moldova (Republic of)",
          "flag": "https://flagcdn.com/md.svg",
          "alpha2Code": "MD",
          "currency": "MDL",
          "languages": "ro"
        }
      ,
        "377": {
          "name": "Monaco",
          "flag": "https://flagcdn.com/mc.svg",
          "alpha2Code": "MC",
          "currency": "EUR",
          "languages": "fr"
        }
      ,
        "976": {
          "name": "Mongolia",
          "flag": "https://flagcdn.com/mn.svg",
          "alpha2Code": "MN",
          "currency": "MNT",
          "languages": "mn"
        }
      ,
        "382": {
          "name": "Montenegro",
          "flag": "https://flagcdn.com/me.svg",
          "alpha2Code": "ME",
          "currency": "EUR",
          "languages": "sr, bs, sq, hr"
        }
      ,
        "1": {
          "name": "Montserrat",
          "flag": "https://flagcdn.com/ms.svg",
          "alpha2Code": "MS",
          "currency": "XCD",
          "languages": "en"
        }
      ,
        "212": {
          "name": "Morocco",
          "flag": "https://flagcdn.com/ma.svg",
          "alpha2Code": "MA",
          "currency": "MAD",
          "languages": "ar"
        }
      ,
        "258": {
          "name": "Mozambique",
          "flag": "https://flagcdn.com/mz.svg",
          "alpha2Code": "MZ",
          "currency": "MZN",
          "languages": "pt"
        }
      ,
        "95": {
          "name": "Myanmar",
          "flag": "https://flagcdn.com/mm.svg",
          "alpha2Code": "MM",
          "currency": "MMK",
          "languages": "my"
        }
      ,
        "264": {
          "name": "Namibia",
          "flag": "https://flagcdn.com/na.svg",
          "alpha2Code": "NA",
          "currency": "NAD",
          "languages": "en, af"
        }
      ,
        "674": {
          "name": "Nauru",
          "flag": "https://flagcdn.com/nr.svg",
          "alpha2Code": "NR",
          "currency": "AUD",
          "languages": "en, na"
        }
      ,
        "977": {
          "name": "Nepal",
          "flag": "https://flagcdn.com/np.svg",
          "alpha2Code": "NP",
          "currency": "NPR",
          "languages": "ne"
        }
      ,
        "31": {
          "name": "Netherlands",
          "flag": "https://flagcdn.com/nl.svg",
          "alpha2Code": "NL",
          "currency": "EUR",
          "languages": "nl"
        }
      ,
        "687": {
          "name": "New Caledonia",
          "flag": "https://flagcdn.com/nc.svg",
          "alpha2Code": "NC",
          "currency": "XPF",
          "languages": "fr"
        }
      ,
        "64": {
          "name": "New Zealand",
          "flag": "https://flagcdn.com/nz.svg",
          "alpha2Code": "NZ",
          "currency": "NZD",
          "languages": "en, mi"
        }
      ,
        "505": {
          "name": "Nicaragua",
          "flag": "https://flagcdn.com/ni.svg",
          "alpha2Code": "NI",
          "currency": "NIO",
          "languages": "es"
        }
      ,
        "227": {
          "name": "Niger",
          "flag": "https://flagcdn.com/ne.svg",
          "alpha2Code": "NE",
          "currency": "XOF",
          "languages": "fr"
        }
      ,
        "234": {
          "name": "Nigeria",
          "flag": "https://flagcdn.com/ng.svg",
          "alpha2Code": "NG",
          "currency": "NGN",
          "languages": "en"
        }
      ,
        "683": {
          "name": "Niue",
          "flag": "https://flagcdn.com/nu.svg",
          "alpha2Code": "NU",
          "currency": "NZD",
          "languages": "en"
        }
      ,
        "672": {
          "name": "Norfolk Island",
          "flag": "https://flagcdn.com/nf.svg",
          "alpha2Code": "NF",
          "currency": "AUD",
          "languages": "en"
        }
      ,
        "850": {
          "name": "Korea (Democratic People's Republic of)",
          "flag": "https://flagcdn.com/kp.svg",
          "alpha2Code": "KP",
          "currency": "KPW",
          "languages": "ko"
        }
      ,
        "1": {
          "name": "Northern Mariana Islands",
          "flag": "https://flagcdn.com/mp.svg",
          "alpha2Code": "MP",
          "currency": "USD",
          "languages": "en, ch"
        }
      ,
        "47": {
          "name": "Norway",
          "flag": "https://flagcdn.com/no.svg",
          "alpha2Code": "NO",
          "currency": "NOK",
          "languages": "no, nb, nn"
        }
      ,
        "968": {
          "name": "Oman",
          "flag": "https://flagcdn.com/om.svg",
          "alpha2Code": "OM",
          "currency": "OMR",
          "languages": "ar"
        }
      ,
        "92": {
          "name": "Pakistan",
          "flag": "https://flagcdn.com/pk.svg",
          "alpha2Code": "PK",
          "currency": "PKR",
          "languages": "ur, en"
        }
      ,
        "680": {
          "name": "Palau",
          "flag": "https://flagcdn.com/pw.svg",
          "alpha2Code": "PW",
          "currency": "USD",
          "languages": "en"
        }
      ,
        "970": {
          "name": "Palestine, State of",
          "flag": "https://flagcdn.com/ps.svg",
          "alpha2Code": "PS",
          "currency": "EGP",
          "languages": "ar"
        }
      ,
        "507": {
          "name": "Panama",
          "flag": "https://flagcdn.com/pa.svg",
          "alpha2Code": "PA",
          "currency": "PAB",
          "languages": "es"
        }
      ,
        "675": {
          "name": "Papua New Guinea",
          "flag": "https://flagcdn.com/pg.svg",
          "alpha2Code": "PG",
          "currency": "PGK",
          "languages": "en"
        }
      ,
        "595": {
          "name": "Paraguay",
          "flag": "https://flagcdn.com/py.svg",
          "alpha2Code": "PY",
          "currency": "PYG",
          "languages": "es, gn"
        }
      ,
        "51": {
          "name": "Peru",
          "flag": "https://flagcdn.com/pe.svg",
          "alpha2Code": "PE",
          "currency": "PEN",
          "languages": "es"
        }
      ,
        "63": {
          "name": "Philippines",
          "flag": "https://flagcdn.com/ph.svg",
          "alpha2Code": "PH",
          "currency": "PHP",
          "languages": "en"
        }
      ,
        "64": {
          "name": "Pitcairn",
          "flag": "https://flagcdn.com/pn.svg",
          "alpha2Code": "PN",
          "currency": "NZD",
          "languages": "en"
        }
      ,
        "48": {
          "name": "Poland",
          "flag": "https://flagcdn.com/pl.svg",
          "alpha2Code": "PL",
          "currency": "PLN",
          "languages": "pl"
        }
      ,
        "351": {
          "name": "Portugal",
          "flag": "https://flagcdn.com/pt.svg",
          "alpha2Code": "PT",
          "currency": "EUR",
          "languages": "pt"
        }
      ,
        "1": {
          "name": "Puerto Rico",
          "flag": "https://flagcdn.com/pr.svg",
          "alpha2Code": "PR",
          "currency": "USD",
          "languages": "es, en"
        }
      ,
        "974": {
          "name": "Qatar",
          "flag": "https://flagcdn.com/qa.svg",
          "alpha2Code": "QA",
          "currency": "QAR",
          "languages": "ar"
        }
      ,
        "383": {
          "name": "Republic of Kosovo",
          "flag": "https://flagcdn.com/xk.svg",
          "alpha2Code": "XK",
          "currency": "EUR",
          "languages": "sq, sr"
        }
      ,
        "262": {
          "name": "Réunion",
          "flag": "https://flagcdn.com/re.svg",
          "alpha2Code": "RE",
          "currency": "EUR",
          "languages": "fr"
        }
      ,
        "40": {
          "name": "Romania",
          "flag": "https://flagcdn.com/ro.svg",
          "alpha2Code": "RO",
          "currency": "RON",
          "languages": "ro"
        }
      ,
        "7": {
          "name": "Russian Federation",
          "flag": "https://flagcdn.com/ru.svg",
          "alpha2Code": "RU",
          "currency": "RUB",
          "languages": "ru"
        }
      ,
        "250": {
          "name": "Rwanda",
          "flag": "https://flagcdn.com/rw.svg",
          "alpha2Code": "RW",
          "currency": "RWF",
          "languages": "rw, en, fr"
        }
      ,
        "590": {
          "name": "Saint Barthélemy",
          "flag": "https://flagcdn.com/bl.svg",
          "alpha2Code": "BL",
          "currency": "EUR",
          "languages": "fr"
        }
      ,
        "290": {
          "name": "Saint Helena, Ascension and Tristan da Cunha",
          "flag": "https://flagcdn.com/sh.svg",
          "alpha2Code": "SH",
          "currency": "SHP",
          "languages": "en"
        }
      ,
        "1": {
          "name": "Saint Kitts and Nevis",
          "flag": "https://flagcdn.com/kn.svg",
          "alpha2Code": "KN",
          "currency": "XCD",
          "languages": "en"
        }
      ,
        "1": {
          "name": "Saint Lucia",
          "flag": "https://flagcdn.com/lc.svg",
          "alpha2Code": "LC",
          "currency": "XCD",
          "languages": "en"
        }
      ,
        "590": {
          "name": "Saint Martin (French part)",
          "flag": "https://flagcdn.com/mf.svg",
          "alpha2Code": "MF",
          "currency": "EUR",
          "languages": "en, fr, nl"
        }
      ,
        "508": {
          "name": "Saint Pierre and Miquelon",
          "flag": "https://flagcdn.com/pm.svg",
          "alpha2Code": "PM",
          "currency": "EUR",
          "languages": "fr"
        }
      ,
        "1": {
          "name": "Saint Vincent and the Grenadines",
          "flag": "https://flagcdn.com/vc.svg",
          "alpha2Code": "VC",
          "currency": "XCD",
          "languages": "en"
        }
      ,
        "685": {
          "name": "Samoa",
          "flag": "https://flagcdn.com/ws.svg",
          "alpha2Code": "WS",
          "currency": "WST",
          "languages": "sm, en"
        }
      ,
        "378": {
          "name": "San Marino",
          "flag": "https://flagcdn.com/sm.svg",
          "alpha2Code": "SM",
          "currency": "EUR",
          "languages": "it"
        }
      ,
        "239": {
          "name": "Sao Tome and Principe",
          "flag": "https://flagcdn.com/st.svg",
          "alpha2Code": "ST",
          "currency": "STD",
          "languages": "pt"
        }
      ,
        "966": {
          "name": "Saudi Arabia",
          "flag": "https://flagcdn.com/sa.svg",
          "alpha2Code": "SA",
          "currency": "SAR",
          "languages": "ar"
        }
      ,
        "221": {
          "name": "Senegal",
          "flag": "https://flagcdn.com/sn.svg",
          "alpha2Code": "SN",
          "currency": "XOF",
          "languages": "fr"
        }
      ,
        "381": {
          "name": "Serbia",
          "flag": "https://flagcdn.com/rs.svg",
          "alpha2Code": "RS",
          "currency": "RSD",
          "languages": "sr"
        }
      ,
        "248": {
          "name": "Seychelles",
          "flag": "https://flagcdn.com/sc.svg",
          "alpha2Code": "SC",
          "currency": "SCR",
          "languages": "fr, en"
        }
      ,
        "232": {
          "name": "Sierra Leone",
          "flag": "https://flagcdn.com/sl.svg",
          "alpha2Code": "SL",
          "currency": "SLL",
          "languages": "en"
        }
      ,
        "65": {
          "name": "Singapore",
          "flag": "https://flagcdn.com/sg.svg",
          "alpha2Code": "SG",
          "currency": "SGD",
          "languages": "en, ms, ta, zh"
        }
      ,
        "1": {
          "name": "Sint Maarten (Dutch part)",
          "flag": "https://flagcdn.com/sx.svg",
          "alpha2Code": "SX",
          "currency": "ANG",
          "languages": "nl, en"
        }
      ,
        "421": {
          "name": "Slovakia",
          "flag": "https://flagcdn.com/sk.svg",
          "alpha2Code": "SK",
          "currency": "EUR",
          "languages": "sk"
        }
      ,
        "386": {
          "name": "Slovenia",
          "flag": "https://flagcdn.com/si.svg",
          "alpha2Code": "SI",
          "currency": "EUR",
          "languages": "sl"
        }
      ,
        "677": {
          "name": "Solomon Islands",
          "flag": "https://flagcdn.com/sb.svg",
          "alpha2Code": "SB",
          "currency": "SBD",
          "languages": "en"
        }
      ,
        "252": {
          "name": "Somalia",
          "flag": "https://flagcdn.com/so.svg",
          "alpha2Code": "SO",
          "currency": "SOS",
          "languages": "so, ar"
        }
      ,
        "27": {
          "name": "South Africa",
          "flag": "https://flagcdn.com/za.svg",
          "alpha2Code": "ZA",
          "currency": "ZAR",
          "languages": "af, en, nr, st, ss, tn, ts, ve, xh, zu"
        }
      ,
        "500": {
          "name": "South Georgia and the South Sandwich Islands",
          "flag": "https://flagcdn.com/gs.svg",
          "alpha2Code": "GS",
          "currency": "FKP",
          "languages": "en"
        }
      ,
        "82": {
          "name": "Korea (Republic of)",
          "flag": "https://flagcdn.com/kr.svg",
          "alpha2Code": "KR",
          "currency": "KRW",
          "languages": "ko"
        }
      ,
        "34": {
          "name": "Spain",
          "flag": "https://flagcdn.com/es.svg",
          "alpha2Code": "ES",
          "currency": "EUR",
          "languages": "es"
        }
      ,
        "94": {
          "name": "Sri Lanka",
          "flag": "https://flagcdn.com/lk.svg",
          "alpha2Code": "LK",
          "currency": "LKR",
          "languages": "si, ta"
        }
      ,
        "249": {
          "name": "Sudan",
          "flag": "https://flagcdn.com/sd.svg",
          "alpha2Code": "SD",
          "currency": "SDG",
          "languages": "ar, en"
        }
      ,
        "211": {
          "name": "South Sudan",
          "flag": "https://flagcdn.com/ss.svg",
          "alpha2Code": "SS",
          "currency": "SSP",
          "languages": "en"
        }
      ,
        "597": {
          "name": "Suriname",
          "flag": "https://flagcdn.com/sr.svg",
          "alpha2Code": "SR",
          "currency": "SRD",
          "languages": "nl"
        }
      ,
        "47": {
          "name": "Svalbard and Jan Mayen",
          "flag": "https://flagcdn.com/sj.svg",
          "alpha2Code": "SJ",
          "currency": "NOK",
          "languages": "no"
        }
      ,
        "268": {
          "name": "Swaziland",
          "flag": "https://flagcdn.com/sz.svg",
          "alpha2Code": "SZ",
          "currency": "SZL",
          "languages": "en, ss"
        }
      ,
        "46": {
          "name": "Sweden",
          "flag": "https://flagcdn.com/se.svg",
          "alpha2Code": "SE",
          "currency": "SEK",
          "languages": "sv"
        }
      ,
        "41": {
          "name": "Switzerland",
          "flag": "https://flagcdn.com/ch.svg",
          "alpha2Code": "CH",
          "currency": "CHF",
          "languages": "de, fr, it, "
        }
      ,
        "963": {
          "name": "Syrian Arab Republic",
          "flag": "https://flagcdn.com/sy.svg",
          "alpha2Code": "SY",
          "currency": "SYP",
          "languages": "ar"
        }
      ,
        "886": {
          "name": "Taiwan",
          "flag": "https://flagcdn.com/tw.svg",
          "alpha2Code": "TW",
          "currency": "TWD",
          "languages": "zh"
        }
      ,
        "992": {
          "name": "Tajikistan",
          "flag": "https://flagcdn.com/tj.svg",
          "alpha2Code": "TJ",
          "currency": "TJS",
          "languages": "tg, ru"
        }
      ,
        "255": {
          "name": "Tanzania, United Republic of",
          "flag": "https://flagcdn.com/tz.svg",
          "alpha2Code": "TZ",
          "currency": "TZS",
          "languages": "sw, en"
        }
      ,
        "66": {
          "name": "Thailand",
          "flag": "https://flagcdn.com/th.svg",
          "alpha2Code": "TH",
          "currency": "THB",
          "languages": "th"
        }
      ,
        "670": {
          "name": "Timor-Leste",
          "flag": "https://flagcdn.com/tl.svg",
          "alpha2Code": "TL",
          "currency": "USD",
          "languages": "pt"
        }
      ,
        "228": {
          "name": "Togo",
          "flag": "https://flagcdn.com/tg.svg",
          "alpha2Code": "TG",
          "currency": "XOF",
          "languages": "fr"
        }
      ,
        "690": {
          "name": "Tokelau",
          "flag": "https://flagcdn.com/tk.svg",
          "alpha2Code": "TK",
          "currency": "NZD",
          "languages": "en"
        }
      ,
        "676": {
          "name": "Tonga",
          "flag": "https://flagcdn.com/to.svg",
          "alpha2Code": "TO",
          "currency": "TOP",
          "languages": "en, to"
        }
      ,
        "1": {
          "name": "Trinidad and Tobago",
          "flag": "https://flagcdn.com/tt.svg",
          "alpha2Code": "TT",
          "currency": "TTD",
          "languages": "en"
        }
      ,
        "216": {
          "name": "Tunisia",
          "flag": "https://flagcdn.com/tn.svg",
          "alpha2Code": "TN",
          "currency": "TND",
          "languages": "ar"
        }
      ,
        "90": {
          "name": "Turkey",
          "flag": "https://flagcdn.com/tr.svg",
          "alpha2Code": "TR",
          "currency": "TRY",
          "languages": "tr"
        }
      ,
        "993": {
          "name": "Turkmenistan",
          "flag": "https://flagcdn.com/tm.svg",
          "alpha2Code": "TM",
          "currency": "TMT",
          "languages": "tk, ru"
        }
      ,
        "1": {
          "name": "Turks and Caicos Islands",
          "flag": "https://flagcdn.com/tc.svg",
          "alpha2Code": "TC",
          "currency": "USD",
          "languages": "en"
        }
      ,
        "688": {
          "name": "Tuvalu",
          "flag": "https://flagcdn.com/tv.svg",
          "alpha2Code": "TV",
          "currency": "AUD",
          "languages": "en"
        }
      ,
        "256": {
          "name": "Uganda",
          "flag": "https://flagcdn.com/ug.svg",
          "alpha2Code": "UG",
          "currency": "UGX",
          "languages": "en, sw"
        }
      ,
        "380": {
          "name": "Ukraine",
          "flag": "https://flagcdn.com/ua.svg",
          "alpha2Code": "UA",
          "currency": "UAH",
          "languages": "uk"
        }
      ,
        "971": {
          "name": "United Arab Emirates",
          "flag": "https://flagcdn.com/ae.svg",
          "alpha2Code": "AE",
          "currency": "AED",
          "languages": "ar"
        }
      ,
        "44": {
          "name": "United Kingdom of Great Britain and Northern Ireland",
          "flag": "https://flagcdn.com/gb.svg",
          "alpha2Code": "GB",
          "currency": "GBP",
          "languages": "en"
        }
      ,
        "1": {
          "name": "United States of America",
          "flag": "https://flagcdn.com/us.svg",
          "alpha2Code": "US",
          "currency": "USD",
          "languages": "en"
        }
      ,
        "598": {
          "name": "Uruguay",
          "flag": "https://flagcdn.com/uy.svg",
          "alpha2Code": "UY",
          "currency": "UYU",
          "languages": "es"
        }
      ,
        "998": {
          "name": "Uzbekistan",
          "flag": "https://flagcdn.com/uz.svg",
          "alpha2Code": "UZ",
          "currency": "UZS",
          "languages": "uz, ru"
        }
      ,
        "678": {
          "name": "Vanuatu",
          "flag": "https://flagcdn.com/vu.svg",
          "alpha2Code": "VU",
          "currency": "VUV",
          "languages": "bi, en, fr"
        }
      ,
        "58": {
          "name": "Venezuela (Bolivarian Republic of)",
          "flag": "https://flagcdn.com/ve.svg",
          "alpha2Code": "VE",
          "currency": "VEF",
          "languages": "es"
        }
      ,
        "84": {
          "name": "Vietnam",
          "flag": "https://flagcdn.com/vn.svg",
          "alpha2Code": "VN",
          "currency": "VND",
          "languages": "vi"
        }
      ,
        "681": {
          "name": "Wallis and Futuna",
          "flag": "https://flagcdn.com/wf.svg",
          "alpha2Code": "WF",
          "currency": "XPF",
          "languages": "fr"
        }
      ,
        "212": {
          "name": "Western Sahara",
          "flag": "https://flagcdn.com/eh.svg",
          "alpha2Code": "EH",
          "currency": "MAD",
          "languages": "es"
        }
      ,
        "967": {
          "name": "Yemen",
          "flag": "https://flagcdn.com/ye.svg",
          "alpha2Code": "YE",
          "currency": "YER",
          "languages": "ar"
        }
      ,
        "260": {
          "name": "Zambia",
          "flag": "https://flagcdn.com/zm.svg",
          "alpha2Code": "ZM",
          "currency": "ZMW",
          "languages": "en"
        }
      ,
        "263": {
          "name": "Zimbabwe",
          "flag": "https://flagcdn.com/zw.svg",
          "alpha2Code": "ZW",
          "currency": "ZMW",
          "languages": "en, sn, nd"
        }
     
    // Add more countries...
  };
  
  export default countryData;
  