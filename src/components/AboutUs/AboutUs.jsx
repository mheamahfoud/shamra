import React from "react";
import "./AboutUs.css";
import defaultImage from "../../assets/new logo shamra.png";
import { useLang } from "../../i18n/Layout18n";
import { useIntl } from "react-intl";
const AboutUs = () => {
  const lang = useLang();
  const intl = useIntl();
  return (
    <div className="aboutus-header">
      <div className="container">
        <div className="col-md-6">
          <img
            src={defaultImage}
            alt="aboutUs.title"
            className="aboutus-image"
          />
        </div>
        <div className="col-md-6">
          <h2>{intl.formatMessage({ id: "about_us" })} </h2>

          {lang == "en" ? (
            <p>
              "We believe that the values of the company are not only important
              but the culmination of the overall success of any company,
              regardless of size or number of employees. The founders of this
              company have spent a great deal of time and effort to define the
              companys ethics and code of conduct not only to build a successful
              company but to build a company with a strong link with the
              community and the surrounding environment."
            </p>
          ) : (
            <p>
              نحن نعتقد أن قيم الشركة ليست مهمة فقط ولكن تتويجا للنجاح الشامل
              لأي شركة، بغض النظر عن حجم أو عدد الموظفين. مؤسسو هذا لقد أنفقت
              الشركة قدرًا كبيرًا من الوقت والجهد لتحديد أخلاقيات الشركة وقواعد
              السلوك ليس فقط لبناء شركة ناجحة الشركة ولكن لبناء شركة ذات ارتباط
              قوي مع المجتمع والبيئة المحيطة.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
