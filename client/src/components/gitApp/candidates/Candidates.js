import React, { useEffect, useContext } from 'react';
import CandidateCard from './CandidateCard';

import CandidateContext from '../../../Context/Candidate/candidateContext';
import AuthContext from '../../../Context/Authentication/authContext';

import styled, { keyframes } from 'styled-components';
import { fadeIn } from 'react-animations';

const FadeInUsers = styled.div`
  animation: 2s ${keyframes`${fadeIn}`};
`;
const FadeIn = styled.div`
  animation: 2s ${keyframes`${fadeIn}`};
`;

const Candidates = () => {
  const authContext = useContext(AuthContext);
  const { user } = authContext;

  const candidateContext = useContext(CandidateContext);
  const { loadCandidates, loading, candidates } = candidateContext;

  useEffect(() => {
    loadCandidates();
    // for (let i in candidates) {
    //   loadSingleCandidate(i.git_account_id);
    // }
    // eslint-disable-next-line
  }, []);
  console.log(candidates);
  return (
    <div className='empty-directory-message'>
      {loading ? (
        <div className='loader container'></div>
      ) : candidates.length === 0 ? (
        <FadeIn>
          <div>
            <i className='far fa-folder-open fa-3x'></i>
            <h3>No Candidates in your directory yet, {user && user.name}.</h3>
            <div>
              <p>Please go to the home page and search for candidates.</p>
              <p>
                Once you find an interesting candidate, click "More" to learn
                more about their github profile.
              </p>
              <p>
                Once in their profile, you'll find an option at the top to add
                them to your directory.
              </p>
            </div>
          </div>
        </FadeIn>
      ) : (
        <FadeInUsers>
          <div>
            <div
              className='userCards candidateCards'
              style={{ marginBottom: '1rem' }}
            >
              {candidates.map(candidate => (
                <CandidateCard key={candidate.id} candidate={candidate} />
              ))}
            </div>
          </div>
        </FadeInUsers>
      )}
    </div>
  );
};

export default Candidates;