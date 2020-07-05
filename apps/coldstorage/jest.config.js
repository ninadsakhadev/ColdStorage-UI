module.exports = {
  name: 'coldstorage',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/coldstorage',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
};
