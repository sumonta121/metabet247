import React, { Component, useState } from "react";
import Navbar from "../frontend/backend/navbar.js";
import Footer from "../frontend/backend/footer.js";
import Chatbox from "../frontend/backend/chatbox.js";
import HeaderRight from "../frontend/backend/header_right.js";
import LeftSidebar from "../frontend/backend/leftSidebar.js";
import { Link, useHistory } from "react-router-dom/cjs/react-router-dom.min.js";
import jwt_decode from "jwt-decode";
import axios from "axios";

const BasicSettingEdit = () => {
  const history = useHistory();
  // Token
  const token = localStorage.getItem("jwtToken");
  const decodedToken = jwt_decode(token);
  const userInfo = decodedToken;
  const user_id = userInfo.user_id;

  // site_title, site_logo, site_favicon, admin_login_cover, site_email, support_email, support_number. site_currency, site_timezone

  const [newUser, setNewUser, setNewAuthor = setNewUser] = useState({
    site_title: "",
    site_logo: "",
    // site_favicon: "",
    // admin_login_cover: "",
    site_email: "",
    support_email: "",
    support_number: "",
    site_currency: "",
    site_timezone: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("site_title", newUser.site_title);
    formData.append("site_logo", newUser.site_logo);
    // formData.append("site_favicon", newUser.site_favicon);
    // formData.append("admin_login_cover", newUser.admin_login_cover);
    formData.append("site_email", newUser.site_email);
    formData.append("support_email", newUser.support_email);
    formData.append("support_number", newUser.support_number);
    formData.append("site_currency", newUser.site_currency);
    formData.append("site_timezone", newUser.site_timezone);

    if (newUser.site_title.length === 0) {
      alert("Fillup Name ");
      return;
    }

    if (newUser.site_logo.length === 0) {
      alert("Please Logo Upload");
      return;
    }

    // if (newUser.site_favicon.length === 0) {
    //   alert("Please Favicon Logo Upload");
    //   return;
    // }

    // if (newUser.admin_login_cover.length === 0) {
    //   alert("Please Admin login cover Upload");
    //   return;
    // }

    if (newUser.site_email.length === 0) {
      alert("Please Fillup Email ");
      return;
    }

    if (newUser.support_email.length === 0) {
      alert("Fillup Support Email ");
      return;
    }

    if (newUser.support_number.length === 0) {
      alert("Fillup Support Number ");
      return;
    }

    if (newUser.site_currency.length === 0) {
      alert("Fillup site currency  ");
      return;
    }

    if (newUser.site_timezone.length === 0) {
      alert("Fillup site timezone ");
      return;
    }

    axios
      // .post(`/api/users/BasicSettingUpdate/${id}`, formData)
      .post("/api/users/BasicSettingUpdate/649159436693727d84be1fc0", formData)
      .then((res) => {
        console.log(res);

        if (res.status === 200) {
          alert("Update Successfully");
          history.push("/basic-setting-list");
        } else {
          console.log(res.status);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleChange = (e) => {
    setNewAuthor({ ...newUser, [e.target.name]: e.target.value });
  };

  const handlelogo = (e) => {
    setNewAuthor({ ...newUser, site_logo: e.target.files[0] });
  };

  // const handlesite_favicon = (e) => {
  //   setNewAuthor({ ...newUser, site_favicon: e.target.files[0] });
  // };



  return (
    <>
      <Navbar />

      <Chatbox />

      <HeaderRight />

      <LeftSidebar />

      <div className="content-body">
        <div className="container-fluid">
          <div className=" col-lg-12">
            <div className="card">
              <div className="card-header">
                <h4 className="card-title">Update: Site Setting</h4>

                <Link to="/basic-setting-list">
                  <button type="button" className="btn btn-success float-right">
                    Back
                  </button>
                </Link>

              </div>
              <div className="card-body">
                <div className="basic-form">
                  <form onSubmit={handleSubmit} encType="multipart/form-data">

                    <div className="mb-3 row">
                      <label className="col-sm-3 col-form-label">
                        Site Name
                      </label>
                      <div className="col-sm-9">
                        <input
                          type="text"
                          placeholder="Brand Name"
                          className="form-control"
                          name="site_title"
                          value={newUser.site_title}
                          onChange={handleChange}
                        />
                      </div>
                    </div>

                    <div className="mb-3 row">
                      <label className="col-sm-3 col-form-label">Logo</label>
                      <div className="col-sm-9">
                        <input
                          type="file"
                          accept=".png, .jpg, .jpeg"
                          name="site_logo"
                          className="form-control"
                          onChange={handlelogo}
                        />
                      </div>
                    </div>

                    {/* <div className="mb-3 row">
                      <label className="col-sm-3 col-form-label">
                        Favicon Logo
                      </label>
                      <div className="col-sm-9">
                        <input
                          type="file"
                          accept=".png, .jpg, .jpeg"
                          name="site_favicon"
                          className="form-control"
                          onChange={handlesite_favicon}
                        />
                      </div>
                    </div>

                    <div className="mb-3 row">
                      <label className="col-sm-3 col-form-label">
                        Admin Login Cover Banner
                      </label>
                      <div className="col-sm-9">
                        <input
                          type="file"
                          accept=".png, .jpg, .jpeg"
                          name="admin_login_cover"
                          className="form-control"
                          onChange={handleadmin_login_cover}
                        />
                      </div>
                    </div> */}

                    <div className="mb-3 row">
                      <label className="col-sm-3 col-form-label">
                        Site Email
                      </label>
                      <div className="col-sm-9">
                        <input
                          type="email"
                          placeholder="Site Email"
                          className="form-control"
                          name="site_email"
                          value={newUser.site_email}
                          onChange={handleChange}
                        />
                      </div>
                    </div>

                    <div className="mb-3 row">
                      <label className="col-sm-3 col-form-label">
                        Site Support Email
                      </label>
                      <div className="col-sm-9">
                        <input
                          type="email"
                          placeholder="Site Support Email"
                          className="form-control"
                          name="support_email"
                          value={newUser.support_email}
                          onChange={handleChange}
                        />
                      </div>
                    </div>

                    <div className="mb-3 row">
                      <label className="col-sm-3 col-form-label">
                        Site Support Number
                      </label>
                      <div className="col-sm-9">
                        <input
                          type="text"
                          placeholder="Site Support Number"
                          className="form-control"
                          name="support_number"
                          value={newUser.support_number}
                          onChange={handleChange}
                        />
                      </div>
                    </div>

                    <div class="mb-3 row">
                      <label class="col-sm-3 col-form-label">Currency</label>
                      <div class="col-sm-9">
                        <select
                          id="country_currency"
                          name="site_currency"
                          class="form-control"
                          // onChange={setdata}
                          onChange={handleChange}
                          required
                        >
                          <option disabled selected>
                            {" "}
                            Select One{" "}
                          </option>
                          <option value="USD" label="US dollar">
                            USD
                          </option>

                          <option value="EUR" label="Euro">
                            EUR
                          </option>
                          <option value="JPY" label="Japanese yen">
                            JPY
                          </option>
                          <option value="GBP" label="Pound sterling">
                            GBP
                          </option>
                          <option
                            value="AED"
                            label="United Arab Emirates dirham"
                          >
                            AED
                          </option>
                          <option value="AFN" label="Afghan afghani">
                            AFN
                          </option>
                          <option value="ALL" label="Albanian lek">
                            ALL
                          </option>
                          <option value="AMD" label="Armenian dram">
                            AMD
                          </option>
                          <option
                            value="ANG"
                            label="Netherlands Antillean guilder"
                          >
                            ANG
                          </option>
                          <option value="AOA" label="Angolan kwanza">
                            AOA
                          </option>
                          <option value="ARS" label="Argentine peso">
                            ARS
                          </option>
                          <option value="AUD" label="Australian dollar">
                            AUD
                          </option>
                          <option value="AWG" label="Aruban florin">
                            AWG
                          </option>
                          <option value="AZN" label="Azerbaijani manat">
                            AZN
                          </option>
                          <option
                            value="BAM"
                            label="Bosnia and Herzegovina convertible mark"
                          >
                            BAM
                          </option>
                          <option value="BBD" label="Barbadian dollar">
                            BBD
                          </option>
                          <option value="BDT" label="Bangladeshi taka">
                            BDT
                          </option>
                          <option value="BGN" label="Bulgarian lev">
                            BGN
                          </option>
                          <option value="BHD" label="Bahraini dinar">
                            BHD
                          </option>
                          <option value="BIF" label="Burundian franc">
                            BIF
                          </option>
                          <option value="BMD" label="Bermudian dollar">
                            BMD
                          </option>
                          <option value="BND" label="Brunei dollar">
                            BND
                          </option>
                          <option value="BOB" label="Bolivian boliviano">
                            BOB
                          </option>
                          <option value="BRL" label="Brazilian real">
                            BRL
                          </option>
                          <option value="BSD" label="Bahamian dollar">
                            BSD
                          </option>
                          <option value="BTN" label="Bhutanese ngultrum">
                            BTN
                          </option>
                          <option value="BWP" label="Botswana pula">
                            BWP
                          </option>
                          <option value="BYN" label="Belarusian ruble">
                            BYN
                          </option>
                          <option value="BZD" label="Belize dollar">
                            BZD
                          </option>
                          <option value="CAD" label="Canadian dollar">
                            CAD
                          </option>
                          <option value="CDF" label="Congolese franc">
                            CDF
                          </option>
                          <option value="CHF" label="Swiss franc">
                            CHF
                          </option>
                          <option value="CLP" label="Chilean peso">
                            CLP
                          </option>
                          <option value="CNY" label="Chinese yuan">
                            CNY
                          </option>
                          <option value="COP" label="Colombian peso">
                            COP
                          </option>
                          <option value="CRC" label="Costa Rican colón">
                            CRC
                          </option>
                          <option value="CUC" label="Cuban convertible peso">
                            CUC
                          </option>
                          <option value="CUP" label="Cuban peso">
                            CUP
                          </option>
                          <option value="CVE" label="Cape Verdean escudo">
                            CVE
                          </option>
                          <option value="CZK" label="Czech koruna">
                            CZK
                          </option>
                          <option value="DJF" label="Djiboutian franc">
                            DJF
                          </option>
                          <option value="DKK" label="Danish krone">
                            DKK
                          </option>
                          <option value="DOP" label="Dominican peso">
                            DOP
                          </option>
                          <option value="DZD" label="Algerian dinar">
                            DZD
                          </option>
                          <option value="EGP" label="Egyptian pound">
                            EGP
                          </option>
                          <option value="ERN" label="Eritrean nakfa">
                            ERN
                          </option>
                          <option value="ETB" label="Ethiopian birr">
                            ETB
                          </option>
                          <option value="EUR" label="EURO">
                            EUR
                          </option>
                          <option value="FJD" label="Fijian dollar">
                            FJD
                          </option>
                          <option value="FKP" label="Falkland Islands pound">
                            FKP
                          </option>
                          <option value="GBP" label="British pound">
                            GBP
                          </option>
                          <option value="GEL" label="Georgian lari">
                            GEL
                          </option>
                          <option value="GGP" label="Guernsey pound">
                            GGP
                          </option>
                          <option value="GHS" label="Ghanaian cedi">
                            GHS
                          </option>
                          <option value="GIP" label="Gibraltar pound">
                            GIP
                          </option>
                          <option value="GMD" label="Gambian dalasi">
                            GMD
                          </option>
                          <option value="GNF" label="Guinean franc">
                            GNF
                          </option>
                          <option value="GTQ" label="Guatemalan quetzal">
                            GTQ
                          </option>
                          <option value="GYD" label="Guyanese dollar">
                            GYD
                          </option>
                          <option value="HKD" label="Hong Kong dollar">
                            HKD
                          </option>
                          <option value="HNL" label="Honduran lempira">
                            HNL
                          </option>
                          <option value="HRK" label="Croatian kuna">
                            HRK
                          </option>
                          <option value="HTG" label="Haitian gourde">
                            HTG
                          </option>
                          <option value="HUF" label="Hungarian forint">
                            HUF
                          </option>
                          <option value="IDR" label="Indonesian rupiah">
                            IDR
                          </option>
                          <option value="ILS" label="Israeli new shekel">
                            ILS
                          </option>
                          <option value="IMP" label="Manx pound">
                            IMP
                          </option>
                          <option value="INR" label="Indian rupee">
                            INR
                          </option>
                          <option value="IQD" label="Iraqi dinar">
                            IQD
                          </option>
                          <option value="IRR" label="Iranian rial">
                            IRR
                          </option>
                          <option value="ISK" label="Icelandic króna">
                            ISK
                          </option>
                          <option value="JEP" label="Jersey pound">
                            JEP
                          </option>
                          <option value="JMD" label="Jamaican dollar">
                            JMD
                          </option>
                          <option value="JOD" label="Jordanian dinar">
                            JOD
                          </option>
                          <option value="JPY" label="Japanese yen">
                            JPY
                          </option>
                          <option value="KES" label="Kenyan shilling">
                            KES
                          </option>
                          <option value="KGS" label="Kyrgyzstani som">
                            KGS
                          </option>
                          <option value="KHR" label="Cambodian riel">
                            KHR
                          </option>
                          <option value="KID" label="Kiribati dollar">
                            KID
                          </option>
                          <option value="KMF" label="Comorian franc">
                            KMF
                          </option>
                          <option value="KPW" label="North Korean won">
                            KPW
                          </option>
                          <option value="KRW" label="South Korean won">
                            KRW
                          </option>
                          <option value="KWD" label="Kuwaiti dinar">
                            KWD
                          </option>
                          <option value="KYD" label="Cayman Islands dollar">
                            KYD
                          </option>
                          <option value="KZT" label="Kazakhstani tenge">
                            KZT
                          </option>
                          <option value="LAK" label="Lao kip">
                            LAK
                          </option>
                          <option value="LBP" label="Lebanese pound">
                            LBP
                          </option>
                          <option value="LKR" label="Sri Lankan rupee">
                            LKR
                          </option>
                          <option value="LRD" label="Liberian dollar">
                            LRD
                          </option>
                          <option value="LSL" label="Lesotho loti">
                            LSL
                          </option>
                          <option value="LYD" label="Libyan dinar">
                            LYD
                          </option>
                          <option value="MAD" label="Moroccan dirham">
                            MAD
                          </option>
                          <option value="MDL" label="Moldovan leu">
                            MDL
                          </option>
                          <option value="MGA" label="Malagasy ariary">
                            MGA
                          </option>
                          <option value="MKD" label="Macedonian denar">
                            MKD
                          </option>
                          <option value="MMK" label="Burmese kyat">
                            MMK
                          </option>
                          <option value="MNT" label="Mongolian tögrög">
                            MNT
                          </option>
                          <option value="MOP" label="Macanese pataca">
                            MOP
                          </option>
                          <option value="MRU" label="Mauritanian ouguiya">
                            MRU
                          </option>
                          <option value="MUR" label="Mauritian rupee">
                            MUR
                          </option>
                          <option value="MVR" label="Maldivian rufiyaa">
                            MVR
                          </option>
                          <option value="MWK" label="Malawian kwacha">
                            MWK
                          </option>
                          <option value="MXN" label="Mexican peso">
                            MXN
                          </option>
                          <option value="MYR" label="Malaysian ringgit">
                            MYR
                          </option>
                          <option value="MZN" label="Mozambican metical">
                            MZN
                          </option>
                          <option value="NAD" label="Namibian dollar">
                            NAD
                          </option>
                          <option value="NGN" label="Nigerian naira">
                            NGN
                          </option>
                          <option value="NIO" label="Nicaraguan córdoba">
                            NIO
                          </option>
                          <option value="NOK" label="Norwegian krone">
                            NOK
                          </option>
                          <option value="NPR" label="Nepalese rupee">
                            NPR
                          </option>
                          <option value="NZD" label="New Zealand dollar">
                            NZD
                          </option>
                          <option value="OMR" label="Omani rial">
                            OMR
                          </option>
                          <option value="PAB" label="Panamanian balboa">
                            PAB
                          </option>
                          <option value="PEN" label="Peruvian sol">
                            PEN
                          </option>
                          <option value="PGK" label="Papua New Guinean kina">
                            PGK
                          </option>
                          <option value="PHP" label="Philippine peso">
                            PHP
                          </option>
                          <option value="PKR" label="Pakistani rupee">
                            PKR
                          </option>
                          <option value="PLN" label="Polish złoty">
                            PLN
                          </option>
                          <option value="PRB" label="Transnistrian ruble">
                            PRB
                          </option>
                          <option value="PYG" label="Paraguayan guaraní">
                            PYG
                          </option>
                          <option value="QAR" label="Qatari riyal">
                            QAR
                          </option>
                          <option value="RON" label="Romanian leu">
                            RON
                          </option>
                          <option value="RSD" label="Serbian dinar">
                            RSD
                          </option>
                          <option value="RUB" label="Russian ruble">
                            RUB
                          </option>
                          <option value="RWF" label="Rwandan franc">
                            RWF
                          </option>
                          <option value="SAR" label="Saudi riyal">
                            SAR
                          </option>
                          <option value="SEK" label="Swedish krona">
                            SEK
                          </option>
                          <option value="SGD" label="Singapore dollar">
                            SGD
                          </option>
                          <option value="SHP" label="Saint Helena pound">
                            SHP
                          </option>
                          <option value="SLL" label="Sierra Leonean leone">
                            SLL
                          </option>
                          <option value="SLS" label="Somaliland shilling">
                            SLS
                          </option>
                          <option value="SOS" label="Somali shilling">
                            SOS
                          </option>
                          <option value="SRD" label="Surinamese dollar">
                            SRD
                          </option>
                          <option value="SSP" label="South Sudanese pound">
                            SSP
                          </option>
                          <option
                            value="STN"
                            label="São Tomé and Príncipe dobra"
                          >
                            STN
                          </option>
                          <option value="SYP" label="Syrian pound">
                            SYP
                          </option>
                          <option value="SZL" label="Swazi lilangeni">
                            SZL
                          </option>
                          <option value="THB" label="Thai baht">
                            THB
                          </option>
                          <option value="TJS" label="Tajikistani somoni">
                            TJS
                          </option>
                          <option value="TMT" label="Turkmenistan manat">
                            TMT
                          </option>
                          <option value="TND" label="Tunisian dinar">
                            TND
                          </option>
                          <option value="TOP" label="Tongan paʻanga">
                            TOP
                          </option>
                          <option value="TRY" label="Turkish lira">
                            TRY
                          </option>
                          <option
                            value="TTD"
                            label="Trinidad and Tobago dollar"
                          >
                            TTD
                          </option>
                          <option value="TVD" label="Tuvaluan dollar">
                            TVD
                          </option>
                          <option value="TWD" label="New Taiwan dollar">
                            TWD
                          </option>
                          <option value="TZS" label="Tanzanian shilling">
                            TZS
                          </option>
                          <option value="UAH" label="Ukrainian hryvnia">
                            UAH
                          </option>
                          <option value="UGX" label="Ugandan shilling">
                            UGX
                          </option>
                          <option value="USD" label="United States dollar">
                            USD
                          </option>
                          <option value="UYU" label="Uruguayan peso">
                            UYU
                          </option>
                          <option value="UZS" label="Uzbekistani soʻm">
                            UZS
                          </option>
                          <option
                            value="VES"
                            label="Venezuelan bolívar soberano"
                          >
                            VES
                          </option>
                          <option value="VND" label="Vietnamese đồng">
                            VND
                          </option>
                          <option value="VUV" label="Vanuatu vatu">
                            VUV
                          </option>
                          <option value="WST" label="Samoan tālā">
                            WST
                          </option>
                          <option value="XAF" label="Central African CFA franc">
                            XAF
                          </option>
                          <option value="XCD" label="Eastern Caribbean dollar">
                            XCD
                          </option>
                          <option value="XOF" label="West African CFA franc">
                            XOF
                          </option>
                          <option value="XPF" label="CFP franc">
                            XPF
                          </option>
                          <option value="ZAR" label="South African rand">
                            ZAR
                          </option>
                          <option value="ZMW" label="Zambian kwacha">
                            ZMW
                          </option>
                          <option value="ZWB" label="Zimbabwean bonds">
                            ZWB
                          </option>
                        </select>
                      </div>
                    </div>

                    <div class="mb-3 row">
                      <label class="col-sm-3 col-form-label">Time Zone</label>
                      <div class="col-sm-9">
                        <select
                          name="site_timezone"
                          id="timezone-offset"
                          class="form-control"
                          onChange={handleChange}
                        >
                          <option disabled selected>
                            {" "}
                            Select One{" "}
                          </option>
                          
                          <option value="-12:00">
                            (GMT -12:00) Eniwetok, Kwajalein
                          </option>
                          <option value="-11:00">
                            (GMT -11:00) Midway Island, Samoa
                          </option>
                          <option value="-10:00">(GMT -10:00) Hawaii</option>
                          <option value="-09:50">(GMT -9:30) Taiohae</option>
                          <option value="-09:00">(GMT -9:00) Alaska</option>
                          <option value="-08:00">
                            (GMT -8:00) Pacific Time (US &amp; Canada)
                          </option>
                          <option value="-07:00">
                            (GMT -7:00) Mountain Time (US &amp; Canada)
                          </option>
                          <option value="-06:00">
                            (GMT -6:00) Central Time (US &amp; Canada), Mexico
                            City
                          </option>
                          <option value="-05:00">
                            (GMT -5:00) Eastern Time (US &amp; Canada), Bogota,
                            Lima
                          </option>
                          <option value="-04:50">(GMT -4:30) Caracas</option>
                          <option value="-04:00">
                            (GMT -4:00) Atlantic Time (Canada), Caracas, La Paz
                          </option>
                          <option value="-03:50">
                            (GMT -3:30) Newfoundland
                          </option>
                          <option value="-03:00">
                            (GMT -3:00) Brazil, Buenos Aires, Georgetown
                          </option>
                          <option value="-02:00">
                            (GMT -2:00) Mid-Atlantic
                          </option>
                          <option value="-01:00">
                            (GMT -1:00) Azores, Cape Verde Islands
                          </option>
                          <option value="+00:00" >
                            (GMT) Western Europe Time, London, Lisbon,
                            Casablanca
                          </option>
                          <option value="+01:00">
                            (GMT +1:00) Brussels, Copenhagen, Madrid, Paris
                          </option>
                          <option value="+02:00">
                            (GMT +2:00) Kaliningrad, South Africa
                          </option>
                          <option value="+03:00">
                            (GMT +3:00) Baghdad, Riyadh, Moscow, St. Petersburg
                          </option>
                          <option value="+03:50">(GMT +3:30) Tehran</option>
                          <option value="+04:00">
                            (GMT +4:00) Abu Dhabi, Muscat, Baku, Tbilisi
                          </option>
                          <option value="+04:50">(GMT +4:30) Kabul</option>
                          <option value="+05:00">
                            (GMT +5:00) Ekaterinburg, Islamabad, Karachi,
                            Tashkent
                          </option>
                          <option value="+05:50">
                            (GMT +5:30) Bombay, Calcutta, Madras, New Delhi
                          </option>
                          <option value="+05:75">
                            (GMT +5:45) Kathmandu, Pokhara
                          </option>
                          <option value="+06:00">
                            (GMT +6:00) Almaty, Dhaka, Colombo
                          </option>
                          <option value="+06:50">
                            (GMT +6:30) Yangon, Mandalay
                          </option>
                          <option value="+07:00">
                            (GMT +7:00) Bangkok, Hanoi, Jakarta
                          </option>
                          <option value="+08:00">
                            (GMT +8:00) Beijing, Perth, Singapore, Hong Kong
                          </option>
                          <option value="+08:75">(GMT +8:45) Eucla</option>
                          <option value="+09:00">
                            (GMT +9:00) Tokyo, Seoul, Osaka, Sapporo, Yakutsk
                          </option>
                          <option value="+09:50">
                            (GMT +9:30) Adelaide, Darwin
                          </option>
                          <option value="+10:00">
                            (GMT +10:00) Eastern Australia, Guam, Vladivostok
                          </option>
                          <option value="+10:50">
                            (GMT +10:30) Lord Howe Island
                          </option>
                          <option value="+11:00">
                            (GMT +11:00) Magadan, Solomon Islands, New Caledonia
                          </option>
                          <option value="+11:50">
                            (GMT +11:30) Norfolk Island
                          </option>
                          <option value="+12:00">
                            (GMT +12:00) Auckland, Wellington, Fiji, Kamchatka
                          </option>
                          <option value="+12:75">
                            (GMT +12:45) Chatham Islands
                          </option>
                          <option value="+13:00">
                            (GMT +13:00) Apia, Nukualofa
                          </option>
                          <option value="+14:00">
                            (GMT +14:00) Line Islands, Tokelau
                          </option>
                        </select>
                      </div>
                    </div>

                    <div className="mb-3 row">
                      <div className="col-sm-2">
                        <input
                          className="form-control btn btn-primary"
                          type="submit" value="Update"
                        />
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default BasicSettingEdit;



