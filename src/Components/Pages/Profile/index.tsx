import React from "react";
import {Avatar, Box, Card, CardBody, CardHeader, Heading, Main, Paragraph} from "grommet";
import {useFirestore, useFirestoreDocData, useUser} from "reactfire";
import UserDetails from "../../../Model/Authentication/UserDetails";
import {useSelector} from "react-redux";
import ReadOnlyUserDetails from "../../Commom/ReadOnlyUserDetails";
import RootState from "../../../Redux/States/RootState";
import Userinfo from "../../Commom/UserInfo";

function Profile() {
    const user = useUser<UserDetails>();
    const isEditing = useSelector<RootState>(state => state.profile.isEditing);

    const userDetailsRef = useFirestore()
        .collection('users')
        .doc(user.uid);

    const userDetails = useFirestoreDocData<UserDetails>(userDetailsRef);

    return (
        <Main pad="small" flex="grow">
            <Card
                background={{
                    image: `url(${userDetails.backgroundImageURL})`,
                }}
                fill="vertical"
                flex="grow"
                overflow="scroll"
                pad="medium">
                <CardHeader pad='none' basis='small'>
                    <Box style={{position: 'relative'}} height='small' width='full'>
                        <Avatar
                            style={{
                                position: 'absolute',
                                top: '100%',
                                left: '50%',
                                marginTop: '-48px',
                                marginLeft: '-48px',
                                width: '96px',
                                height: '96px',
                                border: '3px solid white',
                            }}
                            src={userDetails.photoURL}
                            round='full'
                        />
                    </Box>
                </CardHeader>
                <CardBody
                    flex="grow"
                    round="medium"
                    background={{
                        color: "light-1",
                        opacity: "strong"
                    }}
                    pad={{
                        top: 'large',
                        bottom: 'medium'
                    }}>
                    <Box align='center' pad='large' gap='medium'>
                        <Heading margin='none'>
                            {userDetails.displayName || userDetails.email}
                        </Heading>
                        <Paragraph size="large" textAlign='center' margin='none'>
                            {userDetails.description}
                        </Paragraph>
                        <Box gap="medium">
                            {isEditing ? <Userinfo userDetails={userDetails}/> :
                                <ReadOnlyUserDetails userDetails={userDetails}/>}
                        </Box>
                    </Box>
                </CardBody>
            </Card>
        </Main>
    );
}

export default Profile;
