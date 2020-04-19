import React from "react";
import {Grid, Header, Segment} from "semantic-ui-react";
import {Link} from "react-router-dom";

const PrivacyPolicy = () => (
    <Grid padded centered stackable columns={12}>
        <Grid.Row>
            <Grid.Column width={9}>
                <Segment>
                    <Header size={"huge"}>Privacy Policy</Header>
                </Segment>
                <Segment color='green'>
                    <Header>Introduction</Header>

                    <p><strong>Last updated:</strong> Sunday, April 19, 2020</p>
                    <p>This Privacy Policy describes our policies and procedures on the
                        collection, use and disclosure of your information when you use
                        the service and tells you about your privacy rights and how the
                        law protects you.</p>

                    <p>Please read this Privacy Policy carefully before using the
                        Food Desert Mapping Tool web app operated by
                        Georgia Tech Junior Design Team 9353.</p>

                    <p>This service makes use of the Google Maps APIs. By using this service
                        you are also agreeing to <a href="https://policies.google.com/privacy">Google's Privacy
                            Policy</a>.
                    </p>

                </Segment>

                <Segment color="green">
                    <Header>Interpretation and Definitions</Header>

                    <p>The words of which the initial letter is capitalized have
                        meanings defined under the following conditions.</p>

                    <p>The following definitions shall have the same meaning
                        regardless of whether they appear in singular or in plural:</p>

                    <Segment color="green">
                        <Header>Definitions</Header>
                        For the purposes of this Privacy Policy:
                        <Segment>
                            <Header size={"small"}>You</Header>
                            <p>Means the individual accessing or using the Service,
                                or the company, or other legal entity on behalf of
                                which such individual is accessing or using the
                                service, as applicable.</p>
                        </Segment>

                        <Segment>
                            <Header size={"small"}>Us</Header>
                            <p>Refers to Junior Design Team 9353.</p>
                        </Segment>

                        <Segment>
                            <Header size={"small"}>We</Header>
                            <p>Refers to Junior Design Team 9353.</p>
                        </Segment>

                        <Segment>
                            <Header size={"small"}>Website</Header>
                            <p>Refers to Food Desert Mapping Tool, accessible from
                                the Food Desert Mapping Tool.</p>
                        </Segment>

                        <Segment>
                            <Header size={"small"}>Country</Header>
                            <p>Refers to Georgia, United States</p>
                        </Segment>
                    </Segment>
                </Segment>

                <Segment color="green">
                    <Header>Personal Information</Header>
                    <p>
                        When you use the <Link to="/map">Food Desert Map page</Link>, We will collect your address for
                        the purposes
                        of estimating whether you live in a food desert. Your address
                        is <strong>only</strong> used for the sole purpose of making this determination. We never store
                        or sell this information.
                        Additionally, in order to make this determination, your address and its geographical coordinates
                        (latitude and longitude) will be processed by the Google Maps APIs. The use of this information
                        by Google is governed by <a href="https://policies.google.com/privacy">Google's Privacy
                        Policy</a>.
                    </p>
                </Segment>

                <Segment color="green">
                    <Header>Links to Other Websites</Header>
                    <p>Our service may contain links to other websites that are
                        not operated by us. If you click on a third party link,
                        you will be directed to that third party's site. We
                        strongly advise you to review the Privacy Policy of every
                        site you visit.</p>

                    <p>We have no control over and assume no responsibility for
                        the content, privacy policies or practices of any third
                        party sites or services.</p>
                </Segment>

                <Segment color="green">
                    <Header>Changes To This Privacy Policy</Header>

                    <p>We may update our Privacy Policy from time to time. We will
                        notify you of any changes by posting the new Privacy Policy on
                        this page.</p>

                    <p>You are advised to review this Privacy Policy periodically for
                        any changes. Changes to this Privacy Policy are effective when
                        they are posted on this page.</p>
                </Segment>
            </Grid.Column>
        </Grid.Row>
    </Grid>
);

export default PrivacyPolicy;

