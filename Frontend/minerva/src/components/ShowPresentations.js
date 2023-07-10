import React from 'react';
// import htmlContent from './presentations/HTML5Point_output/test.html';

function ShowPresentation() {
  
  // return <div dangerouslySetInnerHTML={{ __html: htmlContent }} />;

  // const htmlContent = require(`!!raw-loader!./presentations/HTML5Point_output/test.html`).default;
  // return <div><iframe title="ppt" src={htmlContent}></iframe></div> 

  return <div>
  <iframe title="ppt" src="https://studentuml-my.sharepoint.com/personal/sunayana_hubli_student_uml_edu/_layouts/15/Doc.aspx?sourcedoc={65515108-fd26-423e-90eb-80a58f9ec52b}&amp;action=embedview&amp;wdAr=1.3333333333333333&amp;wdEaaCheck=1" width="476px" height="288px" frameborder="0">This is an embedded <a target="_blank" href="https://office.com">Microsoft Office</a> presentation, powered by <a target="_blank" href="https://office.com/webapps">Office</a>.</iframe>
  </div> 
}

export default ShowPresentation;
