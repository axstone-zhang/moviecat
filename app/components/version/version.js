'use strict';

angular.module('doubanApp.version', [
  'doubanApp.version.interpolate-filter',
  'doubanApp.version.version-directive'
])

.value('version', '1.0');
