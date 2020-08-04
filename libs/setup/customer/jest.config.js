module.exports = {
  name: 'setup-customer',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/setup/customer',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
};
