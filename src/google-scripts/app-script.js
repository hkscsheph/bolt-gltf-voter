// This code should be pasted into a Google Apps Script file
// linked to a Google Sheet

// Create the following headers in your Sheet: 
// modelId, userId, userEmail, vote, timestamp

function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);
    const ss = SpreadsheetApp.getActiveSpreadsheet();
    const sheet = ss.getSheetByName('Votes') || ss.insertSheet('Votes');
    const headers = ['modelId', 'userId', 'userEmail', 'vote', 'timestamp'];
    const firstRow = sheet.getRange(1, 1, 1, headers.length).getValues()[0];
    
    if (firstRow.join('') === '') {
      sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
    }
    
    const rowData = [
      data.modelId,
      data.userId,
      data.userEmail,
      data.vote,
      new Date(data.timestamp)
    ];
    
    sheet.appendRow(rowData);
    
    return ContentService.createTextOutput(JSON.stringify({
      status: 'success',
      message: 'Vote recorded successfully'
    })).setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({
      status: 'error',
      message: error.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet() {
  try {
    const ss = SpreadsheetApp.getActiveSpreadsheet();
    const sheet = ss.getSheetByName('Voter');
    if (!sheet) {
      return ContentService.createTextOutput(JSON.stringify({
        status: 'error',
        message: 'Votes sheet not found'
      })).setMimeType(ContentService.MimeType.JSON);
    }
    
    const data = sheet.getDataRange().getValues();
    const headers = data[0];
    const rows = data.slice(1).map(row => {
      let rowData = {};
      headers.forEach((header, index) => {
        rowData[header] = row[index];
      });
      return rowData;
    });
    
    return ContentService.createTextOutput(JSON.stringify({
      status: 'success',
      message: 'Data retrieved successfully',
      data: rows
    })).setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({
      status: 'error',
      message: error.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  }
}