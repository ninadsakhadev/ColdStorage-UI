module.exports = {
  name: 'setup-landing',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/setup/landing',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
};
