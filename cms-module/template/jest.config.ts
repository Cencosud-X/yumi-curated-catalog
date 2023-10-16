/* eslint-disable */
export default {
  displayName: '{{data.path}}',
  preset: '../../jest.preset.js',
  transform: {
    '^.+\\.[tj]sx?$': 'babel-jest',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  coverageDirectory: '../../coverage/{{data.group_folder}}/{{data.path}}',
};
