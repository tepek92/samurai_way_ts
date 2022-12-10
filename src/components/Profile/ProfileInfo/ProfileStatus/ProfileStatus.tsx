import React, {ChangeEvent} from 'react'


type ProfileStatusType = {
    status: string
    updateStatus: (status: string) => void
}


export class ProfileStatus extends React.Component<ProfileStatusType> {

    state = {
        editMode: false,
        status: this.props.status
    }

    activeEditMode = () => {
        this.setState({
            editMode: true
        })
    }

    deActiveEditMode = () => {
        this.setState({
            editMode: false
        })
        this.props.updateStatus(this.state.status);
    }

    onChangeStatus = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({
            status: e.currentTarget.value
        })
    }

    render() {
        const {status} = this.props;

        return (
            <p>
                <b>Статус: </b>
                {!this.state.editMode && <span onDoubleClick={this.activeEditMode}>{status ? status : "Нет статуса:("}</span>}
                {this.state.editMode && <input onChange={this.onChangeStatus} onBlur={this.deActiveEditMode} autoFocus={true} value={this.state.status}/>}
            </p>
        );
    }
}
