import { Meteor } from 'meteor/meteor'
import { Config } from '/imports/api/config/config'

Meteor.startup(() => {
	SyncedCron.start()

	let config = Config.findOne({
		_id: 'recaptcha'
	}) || {}
	
	const isTest = Meteor.isAppTest || Meteor.isTest;
	Meteor.settings.public.RECAPTCHA_CLIENT = isTest ? '6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI' : config.publicKey || ''

	reCAPTCHA.config({
        privatekey: isTest ? '6LeIxAcTAAAAAGG-vFI1TnRWxMZNFuojJ4WifJWe' : config.privateKey || ''
	})

	Kadira.connect('sq5LGeYZH5K8MXkTC', '825ce47a-32e5-4685-bfd8-96ad5d446f47', {
		endpoint: 'https://kadira.emurgolance.org'
	})
})