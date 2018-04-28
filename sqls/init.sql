CREATE TABLE `creditcards` (
  `id` char(36) NOT NULL,
  `number` varchar(256) NOT NULL,
  `cvv` varchar(256) NOT NULL,
  `expiration` date NOT NULL,
  `company` varchar(256) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

ALTER TABLE `creditcards`
  ADD PRIMARY KEY (`id`);

-- Temp example
INSERT INTO `creditcards` (`id`, `number`, `cvv`, `expiration`, `company`) VALUES
('16831d1d-5d41-43b6-b42f-11b42dc79f08', 'U2FsdGVkX1+rRKLzVUltxgJrKiAcnd4PTSvrLdOAXJWpIiXnQD0j+CNLH0MeWBX2', 'U2FsdGVkX180T6/imyfdOg6Wnl1cSiMgZq+o7HSEtfY=', '2018-08-30', 'U2FsdGVkX1+1+HCXQUNrHEsnOJi/jEccaMVJn2G64zs='),
('332a7d43-eead-4ee5-baf7-a84fd142b1d3', 'U2FsdGVkX19C6hpyXey3SCm8dSUfcT2fUIWOCsXakof0yUlBijHPX6+Et8dZ32Ph', 'U2FsdGVkX1+Wv7X+SWQbTLnJhu/p6WAMRPIcX4Ebv4c=', '2018-08-30', 'U2FsdGVkX18zGsswbsgrU99jC8PNu9A5Tuu6zA8HeM4='),
('628c56a0-d37d-4c9e-ad4d-355d772ebefb', 'U2FsdGVkX19TKUprsrqTbdTIaN6C7yPYCv6q6Z3iTRgrlM4FZmi9UCMOoLaTYTFx', 'U2FsdGVkX1/UhcV4L9vlejkjhO/BTsE6pv9EYIxD7lw=', '2018-08-30', 'U2FsdGVkX19NziaNSUMuCSOuI0oHtmm4s6MC3NzMipc='),
('7de509f3-46c9-477e-bbf9-ea1fd0a69565', 'U2FsdGVkX1+qEJ65zEOHLHculA6w3V1eTikA3/Qzb1UggLoi2ZUgPHJgxFCH/8tR', 'U2FsdGVkX1+bcJNzX1E0GucGPU9llA76XcS9/BGpWPQ=', '2018-08-30', 'U2FsdGVkX19HbwTPP2gkRTdtg3CBDQIIMaJGtm8JzrI='),
('92f55a2b-128a-4e9b-aee4-bcdb9f422b5d', 'U2FsdGVkX1+aI2n/z6H/0oWAJUAObucv1RjaAmRAsnqGcZsJuj2b+LpyYXrUKr44', 'U2FsdGVkX19A/oF9WrUyYIbs0upberUQdlvoyoLN1xQ=', '2018-08-30', 'U2FsdGVkX19TYjPPV21Re2RwZ2d+TFrVcoon3ttQDNMrJEV6CdYRLoMFwcyt1LG2'),
('9fc0245d-5ce1-4de3-b421-9611acedcebd', 'U2FsdGVkX1+7ahx8X1kz0dgtvxbqIM88mUKSgCCEN2f6HM9YVbXxqE4fVrH95QLf', 'U2FsdGVkX1+XpMyNSfHyfCyauYXRZS9WypMHT4toZSM=', '2018-08-30', 'U2FsdGVkX1+hXi9ibQVOVTnwWDO+xrIuI3qO/yXQiho='),
('a8ee8b55-f213-4b09-aae3-f2aaf02dccbf', 'U2FsdGVkX1801nyWpK05VxACdeJ3v4XX56SVqmxJke733romTM0na9hnnmZxNvU5', 'U2FsdGVkX19ePRQRTGLW9Z+LbjiHY7z2CslErjyFDsI=', '2018-08-30', 'U2FsdGVkX1/SlJKCyezQ6S04sho3cZnmkLRgAqfjKXM='),
('aedf1924-6c73-412d-8386-ae5c432af2a9', 'U2FsdGVkX1+4+bwgRz5rinz59a4tnyKqFpht7pcvqLns/gM/ec+TpbrEQ+IEEpSa', 'U2FsdGVkX19e1EEcWn6Rd8OUsJLftfJSLLyUtGTZfyc=', '2018-08-30', 'U2FsdGVkX19JIb8MXaMsA/MO5R88bJCzJhHk0jlZc3s='),
('d28c9d3b-9438-4b09-b6fd-46e63e51365b', 'U2FsdGVkX1+SppC5NiOU1FS1HrbhSynl3FIPLJnjo6L57lg4KyBzEvhmcjh7vCOq', 'U2FsdGVkX1+7R9mTLlICw39qpk3XdmDuh08pVJ2WSuw=', '2018-08-30', 'U2FsdGVkX19HihgckboxBWujAe+STuyD2Y5G8MYomCUWPgCAR6GWyOFn4Q0nmRxB'),
('d581a64c-2d23-45ae-952d-d9b25026d3ab', 'U2FsdGVkX1/DoigKwqQb5M7pJJp7bmeNN3XPJA5Zn77KXhcKyyg/y60buJMblnKP', 'U2FsdGVkX1+4ubXhXOTbxAP3vRE2fMnj+SZeKcKVNp8=', '2018-08-30', 'U2FsdGVkX18vNbLLLF9HNfHgR5qkvd7N+zeG/vdQ6zc=');
