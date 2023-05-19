const fs = require('fs');
const path = require('path');

module.exports = async (runner, args) => {
  try {
  
    console.log('> Rollback ✅ DONE')

  } catch(ex) {
    console.error(ex);
    throw new Error('Failed to execute the rollback script');
  }
}