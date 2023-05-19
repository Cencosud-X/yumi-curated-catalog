module.exports = async (runner, args) => {
  try {
    console.log('> POST :');

  } catch(ex) {
    console.error(ex);
    throw new Error('Failed to execute the post script');
  }
}
