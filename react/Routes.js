import HomeScene from './home/HomeScene'
import ManageScene from './manage/ManageScene'
import SettingsScene from './settings/SettingsScene'
import { Navigator } from 'react-native'

export function Home() {
	return {
		component: HomeScene,
		transition: Navigator.SceneConfigs.PushFromRight,
	}
}

export function Manage() {
	return {
		component: ManageScene,
		transition: Navigator.SceneConfigs.VerticalUpSwipeJump,
	}
}

export function Settings() {
	return {
		component: SettingsScene,
		transition: Navigator.SceneConfigs.VerticalUpSwipeJump,
	}
}
