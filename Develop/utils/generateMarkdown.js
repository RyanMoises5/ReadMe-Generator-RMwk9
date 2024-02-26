function renderLicenseBadge(license) {
  let badgeString = "";
  if (license!=='No License') {
    badgeString = `![License](https://img.shields.io/badge/License-${license}-blue)`
  }
  return badgeString;
}

function renderLicenseLink(license) {
  let linkString = "";
  switch (license) {
    case 'Apache_2.0':
      linkString = "https://www.apache.org/licenses/LICENSE-2.0.html";
      break;
    case 'GPL_3.0':
      linkString = "https://www.gnu.org/licenses/gpl-3.0.en.html";
      break;
    case 'MIT':
      linkString = "https://mit-license.org/";
      break;
    case 'BSD_2_Clause':
      linkString = "https://opensource.org/license/bsd-2-clause";
      break;
    case 'BSD_3_Clause':
      linkString = "https://opensource.org/licenses/BSD-3-Clause";
      break;
    case "BSL_1.0":
      linkString = "https://choosealicense.com/licenses/bsl-1.0/";
      break;
    case "CC0_1.0":
      linkString = "https://creativecommons.org/publicdomain/zero/1.0/legalcode.en";
      break;
    case "EPL_2.0":
      linkString = "https://www.eclipse.org/legal/epl-2.0/";
      break;
    case "AGPL_3.0":
      linkString = "https://www.gnu.org/licenses/agpl-3.0.en.html";
      break;
    case "GPL_2.0":
      linkString = "https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html";
      break;
    case "LGPL_2.1":
      linkString = "https://www.gnu.org/licenses/old-licenses/lgpl-2.1.en.html";
      break; 
    case "MPL_2.0":
      linkString = "https://www.mozilla.org/en-US/MPL/2.0/";
      break; 
    case "Unilicense":
      linkString = "https://choosealicense.com/licenses/unlicense/";
      break; 
    default:
      linkString = "";
      break;
  }
  return linkString;
}

function renderLicenseSection(license) {
  let licenseSection = "\n\n## License\n";
  if (license !=='No License') {
    licenseSection += `This project uses the ${license} license. Find more information about this license by clicking [HERE](` + renderLicenseLink(license) + ').\n';
  } else {
    licenseSection += "This project has no licenses. Reproduction and distribution of this project is prohibited."
  }
  return licenseSection;
}

function generateMarkdown(data) {

  let markDown = 

`# Title: ${data.title} ` + renderLicenseBadge(data.license) +
`\n\n## Description
${data.description}
\n## Install
${data.install}
\n## Usage
${data.usage}
\n## Contributing
${data.contributing}
\n## Testing
${data.tests}` +
renderLicenseSection(data.license) +
`\n## Questions
Find the author's works [HERE](https://github.com/${data.userGitHub}).\n 
Direct any questions to ${data.userEmail}.
`
  return markDown;
}

module.exports = generateMarkdown;