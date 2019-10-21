import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { fetchSkills } from '../../../store/skills/actions';
import Button from '../../UI/Button/Button';
import Skill from './Skill/Skill';
import './Skills.scss';

class Skills extends Component {
    constructor(props) {
        super(props)

        this.state = {
            counter: -3,
            position: -660,
            transition: 'margin-left 500ms ease'
        };
    }

    prevSkill = () => {
        if (this.state.position !== 0) {
            if (this.state.transition === 'none') {
                this.setState({
                    transition: 'margin-left 500ms ease'
                });
            }
            this.setState(prevState => ({
                counter: ++prevState.counter,
                position: (220 * this.state.counter),
            }))
        } else {
            this.setState({
                transition: 'none',
                counter: -(this.props.userSkills.length),
                position: -(this.props.userSkills.length) * 220
            })

            setTimeout(() => {
                this.setState(prevState => ({
                    transition: 'margin-left 500ms ease',
                    counter: ++prevState.counter,
                    position: (220 * this.state.counter)
                }))
            }, 50);
        }
    }

    nextSkill = () => {
        if (this.state.position !== -(this.props.userSkills.length + 4) * 220 && this.state.position >= -(this.props.userSkills.length + 4) * 220) {
            if (this.state.transition === 'none') {
                this.setState({
                    transition: 'margin-left 500ms ease'
                });
            }
            this.setState(prevState => ({
                counter: --prevState.counter,
                position: (220 * this.state.counter),
            }))
        } else {
            this.setState({
                transition: 'none',
                counter: -4,
                position: -880
            });

            setTimeout(() => {
                this.setState(prevState => ({
                    transition: 'margin-left 500ms ease',
                    counter: --prevState.counter,
                    position: (220 * this.state.counter)
                }))
            }, 50);
        }
    }

    componentDidMount() {
        this.props.fetchSkills()
    }

    render() {
        const { position, transition } = this.state;
        const { userSkills } = this.props;

        let skills = userSkills.map(skill => (
            <Skill
                key={skill.id}
                skillName={skill.skillName}
                skillImg={skill.skillImg}
                type={skill.type}
                experience={skill.experience}
            />))

        let gridTemplateColumnsValue = `repeat(${skills.length + 8}, 19.22vh`;

        return (
            <div className='Skills'>
                <div className="skills-container">
                    <div className="skills-slide"
                        style={{
                            marginLeft: position + 'px',
                            transition: transition,
                            gridTemplateColumns: gridTemplateColumnsValue,
                        }}>
                        {skills.slice(-4)}
                        {skills}
                        {skills.slice(0, 4)}
                    </div>
                </div>
                <div className="SliderButtons">
                    <Button clicked={(skills.length >= 4) ? this.prevSkill : null}>
                        <i className="fas fa-arrow-left"></i>
                    </Button>
                    <Button clicked={(skills.length >= 4) ? this.nextSkill : null}>
                        <i className="fas fa-arrow-right"></i>
                    </Button>
                </div>
            </div >
        )
    }
}

Skills.propTypes = {
    userSkills: PropTypes.array.isRequired
};

const mapStateToProps = state => {
    return {
        userSkills: state.skills.userSkills,
    }
};

const mapDispatchToProps = dispatch => {
    return {
        fetchSkills: status => dispatch(fetchSkills(status))
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Skills);