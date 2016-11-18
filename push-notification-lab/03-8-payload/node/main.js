/*
Copyright 2016 Google Inc.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
var webPush = require('web-push');

var pushSubscription = YOUR_SUBSCRIPTION_OBJECT;

// TODO 19 - include VAPID keys

const payload = 'Here is a payload!';

const options = {
  gcmAPIKey: 'YOUR_SERVER_KEY',
  TTL: 60,

  // TODO 20 - add VAPID details

};

webPush.sendNotification(
  pushSubscription,
  payload,
  options
);