import React from 'react'
import { Switch } from '@nextui-org/react'

const NotificationsSettingsx = () => {
  return (
    <div className='article-notification'>
      <div className='notification-1'>
        <div className='notification_head'>
          <h6>Email notifications</h6>
          <p>Get emails to find out what`s going on when you`re not online</p>
        </div>
        <div className='notification_assignment'>
          <div className='notification_assignment_settings'>
            <h6 className='settings_switch'>
              <span>Graded Assignment</span>
              <span>
                <Switch initialChecked />
              </span>
            </h6>
            <p>Know the particular assignment a teacher has graded</p>
          </div>
          <div className='notification_assignment_settings'>
            <h6 className='settings_switch'>
              <span>New Assignment</span>
              <span>
                <Switch initialChecked />
              </span>
            </h6>
            <p>Get notified when you have new assignments.</p>
          </div>
        </div>
      </div>
      <hr />
      <div className='notification-1'>
        <div className='notification_head'>
          <h6>Push notifications</h6>
          <p>Get emails to find out what`s going on when you`re not online</p>
        </div>
        <div className='notification_assignment'>
          <div className='notification_assignment_settings'>
            <h6 className='settings_switch'>
              <span>Graded Assignment</span>
              <span>
                <Switch initialChecked />
              </span>
            </h6>
            <p>Know the particular assignment a teacher has graded</p>
          </div>
          <div className='notification_assignment_settings'>
            <h6 className='settings_switch'>
              <span>New Assignment</span>
              <span>
                <Switch initialChecked />
              </span>
            </h6>
            <p>Get notified when you have new assignments.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NotificationsSettingsx
