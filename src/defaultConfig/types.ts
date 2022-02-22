import type { NotificationPosition } from '../types/config'
import type { DefaultKeys, defaultVariants } from './defaultConfig'
import type { ImageSourcePropType } from 'react-native'

export type DefaultVariants = typeof defaultVariants
export type NotificationVariants = keyof DefaultVariants
export type IconVisualStyle = 'color' | 'monochromatic' | 'no-icon'
export type Theme = 'regular' | 'dark'
export type BorderType = 'border' | 'accent' | 'no-border'

export type IconsLinksTypes = {
  [key in DefaultKeys]: {
    color: ImageSourcePropType
    white: ImageSourcePropType
    black: ImageSourcePropType
  }
}

export type NotificationOwnProps = {
  title?: string
  description: string
  notificationPosition?: NotificationPosition
  onPress?: () => void
}

export type NotificationStyleConfig = Partial<{
  titleSize: number
  titleColor: string
  descriptionSize: number
  descriptionColor: string
  bgColor: string
  borderRadius: number
  accentColor: string
  borderWidth: number
  multiline: number
  defaultIconType: IconVisualStyle
  leftIconSource: ImageSourcePropType
  borderType: BorderType
}>

export type StyleProps = { style?: Partial<NotificationStyleConfig> }
export type NotificationProps = NotificationOwnProps & StyleProps
export type MergedNotificationStyleConfig = NotificationStyleConfig & { theme: Theme }

export type DefaultLayoutConfig = {
  defaultStylesSettings?: {
    darkMode?: boolean
    globalConfig?: Partial<NotificationStyleConfig>
  } & { [key in `${DefaultKeys}Config`]?: Partial<NotificationStyleConfig> }
}
