// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let badgeString = "";
  if (license!=='No License') {
    badgeString = `[![License](https://img.shields.io/badge/License-${license}-blue)]`
  }
  return badgeString;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let linkString = "";
  switch (license) {
    case 'Apache-2.0':
      linkString = "https://www.apache.org/licenses/LICENSE-2.0.html";
      break;
    case 'GPL-3.0':
      linkString = "https://www.gnu.org/licenses/gpl-3.0.en.html";
      break;
    case 'MIT':
      linkString = "https://mit-license.org/";
      break;
    case 'BSD-2-Clause':
      linkString = "https://opensource.org/license/bsd-2-clause";
      break;
    case 'BSD-3-Clause':
      linkString = "https://opensource.org/licenses/BSD-3-Clause";
      break;
    case "BSL-1.0":
      linkString = "https://choosealicense.com/licenses/bsl-1.0/";
      break;
    case "CC0-1.0":
      linkString = "https://creativecommons.org/publicdomain/zero/1.0/legalcode.en";
      break;
    case "EPL-2.0":
      linkString = "https://www.eclipse.org/legal/epl-2.0/";
      break;
    case "AGPL-3.0":
      linkString = "https://www.gnu.org/licenses/agpl-3.0.en.html";
      break;
    case "GPL-2.0":
      linkString = "https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html";
      break;
    case "LGPL-2.1":
      linkString = "https://www.gnu.org/licenses/old-licenses/lgpl-2.1.en.html";
      break; 
    case "MPL-2.0":
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

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {

}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  renderLicenseBadge(data);
  renderLicenseLink(data);
  renderLicenseSection(data);
  // return `# ${data.title}`;
}

module.exports = generateMarkdown;
