// This code should be pasted into a Google Apps Script file
// linked to a Google Sheet

// Create the following headers in your Sheet: 
// modelId, userId, userEmail, vote, timestamp

function doPost(e) {
  try {
    // Parse the incoming JSON data
    const data = JSON.parse(e.postData.contents);
    
    // Access the active spreadsheet
    const ss = SpreadsheetApp.getActiveSpreadsheet();
    const sheet = ss.getSheetByName('Votes') || ss.insertSheet('Votes');
    
    // Ensure headers exist
    const headers = ['modelId', 'userId', 'userEmail', 'vote', 'timestamp'];
    const firstRow = sheet.getRange(1, 1, 1, headers.length).getValues()[0];
    
    // Add headers if they don't exist
    if (firstRow.join('') === '') {
      sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
    }
    
    // Prepare the data row
    const rowData = [
      data.modelId,
      data.userId,
      data.userEmail,
      data.vote,
      new Date(data.timestamp)
    ];
    
    // Append the data to the sheet
    sheet.appendRow(rowData);
    
    // Return success
    return ContentService.createTextOutput(JSON.stringify({
      status: 'success',
      message: 'Vote recorded successfully'
    })).setMimeType(ContentService.MimeType.JSON);
    
  } catch (error) {
    // Return error
    return ContentService.createTextOutput(JSON.stringify({
      status: 'error',
      message: error.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet() {
  return ContentService.createTextOutput(JSON.stringify({
    status: 'success',
    message: 'The API is working.'
  })).setMimeType(ContentService.MimeType.JSON);
}