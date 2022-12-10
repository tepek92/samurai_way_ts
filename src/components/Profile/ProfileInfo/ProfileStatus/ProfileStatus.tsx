import React from 'react'


type ProfileStatusType = {
    aboutMe: string
}


export class ProfileStatus extends React.Component<ProfileStatusType> {

    state = {
        editMode: false
    }

    activeEditMode() {
        this.setState({
            editMode: true
        })
    }

    deActiveEditMode() {
        this.setState({
            editMode: false
        })
    }

    render() {
        const {aboutMe} = this.props;

        return (
            <p>
                <b>Статус: </b>
                {!this.state.editMode && <span onDoubleClick={this.activeEditMode.bind(this)}>{aboutMe ? aboutMe : "Нет статуса:("}</span>}
                {this.state.editMode && <input onBlur={this.deActiveEditMode.bind(this)} autoFocus={true} value={aboutMe ? aboutMe : "Нет статуса:("}/>}
            </p>
        );
    }
}
