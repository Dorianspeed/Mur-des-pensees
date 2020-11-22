// == Import : npm
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Segment, Breadcrumb } from 'semantic-ui-react';

// == Import : local
import PendingApplications from './PendingApplications';
import PendingArticles from './PendingArticles';
import AdminPanel from './AdminPanel';

// == Composant
const Admin = ({
  pendingApplications, pendingArticles,
  getPendingApplications, getPendingArticles,
  validateApplication, declineApplication,
  validateArticle, declineArticle,
}) => {
  const [visibleApplications, setVisibleApplications] = useState(false);
  const [visibleArticles, setVisibleArticles] = useState(false);

  const handleVisibleApplications = () => {
    setVisibleApplications(true);
  };

  const handleVisibleArticles = () => {
    setVisibleArticles(true);
  };

  const resetVisible = () => {
    setVisibleApplications(false);
    setVisibleArticles(false);
  };

  useEffect(() => {
    getPendingApplications();
    getPendingArticles();
  }, []);

  return (
    <>
      {(visibleApplications || visibleArticles) ? null : (
        <>
          <Segment basic padded>
            <Breadcrumb size="large">
              <Breadcrumb.Section href="/">Accueil</Breadcrumb.Section>
              <Breadcrumb.Divider icon="right angle" />
              <Breadcrumb.Section active>Panneau d'administration</Breadcrumb.Section>
            </Breadcrumb>
          </Segment>
          <Segment vertical style={{ padding: '0em 0em 4em 0em' }}>
            <AdminPanel
              pendingApplications={pendingApplications}
              pendingArticles={pendingArticles}
              handleVisibleApplications={handleVisibleApplications}
              handleVisibleArticles={handleVisibleArticles}
            />
          </Segment>
        </>
      )}
      {visibleApplications && (
        <>
          <Segment basic padded>
            <Breadcrumb size="large">
              <Breadcrumb.Section href="/">Accueil</Breadcrumb.Section>
              <Breadcrumb.Divider icon="right angle" />
              <Breadcrumb.Section onClick={resetVisible}>
                Panneau d'administration
              </Breadcrumb.Section>
              <Breadcrumb.Divider icon="right angle" />
              <Breadcrumb.Section active>Candidatures en attente de validation</Breadcrumb.Section>
            </Breadcrumb>
          </Segment>
          <Segment vertical style={{ padding: '0em 0em 4em 0em' }}>
            <PendingApplications
              pendingApplications={pendingApplications}
              resetVisible={resetVisible}
              validateApplication={validateApplication}
              declineApplication={declineApplication}
            />
          </Segment>
        </>
      )}
      {visibleArticles && (
        <>
          <Segment basic padded>
            <Breadcrumb size="large">
              <Breadcrumb.Section href="/">Accueil</Breadcrumb.Section>
              <Breadcrumb.Divider icon="right angle" />
              <Breadcrumb.Section onClick={resetVisible}>
                Panneau d'administration
              </Breadcrumb.Section>
              <Breadcrumb.Divider icon="right angle" />
              <Breadcrumb.Section active>Articles en attente de validation</Breadcrumb.Section>
            </Breadcrumb>
          </Segment>
          <Segment vertical style={{ padding: '0em 0em 4em 0em' }}>
            <PendingArticles
              pendingArticles={pendingArticles}
              resetVisible={resetVisible}
              validateArticle={validateArticle}
              declineArticle={declineArticle}
            />
          </Segment>
        </>
      )}
    </>
  );
};

Admin.propTypes = {
  getPendingApplications: PropTypes.func.isRequired,
  getPendingArticles: PropTypes.func.isRequired,
  pendingApplications: PropTypes.array.isRequired,
  pendingArticles: PropTypes.array.isRequired,
  validateApplication: PropTypes.func.isRequired,
  declineApplication: PropTypes.func.isRequired,
  validateArticle: PropTypes.func.isRequired,
  declineArticle: PropTypes.func.isRequired,
};

// == Export
export default Admin;
