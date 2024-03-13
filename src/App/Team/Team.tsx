import React from "react";
import {Image, Table} from "react-bootstrap";
import FakePeople from "../assets/john_doe.jpg"

export function Team(){
    return(
        <Table striped borderless size="sm" className="mx-auto w-50">
            <tbody>
                <tr>
                    <td className="text-center">
                        <Image
                            src={FakePeople}
                        />
                        <h3>Fictional Person 1</h3>
                    </td>
                    <td>Are you tired of always getting things right? Exhausted from being burdened by
                        the weight of accurate knowledge? Fear not! Fictional Person 1 is here to liberate you from
                        the shackles of truth with his revolutionary teaching methods that guarantee to fill your
                        brain with beautifully crafted, utterly false information.
                    </td>
                </tr>
                <tr>
                    <td className="text-center">
                        <Image
                            src={FakePeople}
                        />
                        <h3>Fictional Person 2</h3>
                    </td>
                    <td>Why settle for reality when you can learn the art of confidently stating that the moon is
                        made of green cheese, or that Shakespeare was a time-traveling astronaut? With
                        Fictional Person 2's guidance, you'll master the skill of arguing that water is dry and
                        fire is wet, all while maintaining a straight face.</td>
                </tr>
                <tr>
                    <td className="text-center">
                        <Image
                            src={FakePeople}
                        />
                        <h3>Fictional Person 3</h3>
                    </td>
                    <td>Are you tired of the truth? Exhausted by facts? Does the accuracy of information leave you
                        yawning? Look no further! Fictional Person 3, the world-renowned tutor in the art of
                        alternative facts, is here to turn your educational world upside down!</td>
                </tr>
            </tbody>
        </Table>
    );
}