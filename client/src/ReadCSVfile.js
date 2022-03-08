import React from 'react';
import { useCSVReader } from 'react-papaparse';
import { useStoreActions, useStoreState } from 'easy-peasy';

const ReadCSVfile = () => {
    const setFileContent = useStoreActions((actions) => actions.setFileContent);
    const setFileName = useStoreActions((actions) => actions.setFileName);
    const setFiles = useStoreActions((actions) => actions.setFiles);

    const ifLogin = useStoreState((state) => state.ifLogin);
    const files = useStoreState((state) => state.files);

    const { CSVReader } = useCSVReader();
  return (
    <CSVReader onUploadAccepted = {(results) => {
        console.log('---------------------------');
        console.log(results);
        console.log('---------------------------');
        ifLogin ? setFileContent(results.data) : setFileContent([])
        console.log({files})
      }}>
    {({
        getRootProps,
        acceptedFile,
        ProgressBar,
        getRemoveFileProps,
      }) => (
        <>
          <div className='ReadCSVfile'>
            <button type='button' className='AddFile' {...getRootProps()} >
              Browse file
            </button>
            <div className='AcceptedFile'>
              {acceptedFile && acceptedFile.name ? acceptedFile.name && setFileName(acceptedFile.name) : 'Choose a CSV file'}
              
            </div>
            <button className='RemoveFile'{...getRemoveFileProps()} onClick={() => {setFileContent([])}}>
              Remove
            </button>
          </div>
          <ProgressBar  />
        </>
      )}

    
    </CSVReader>
  );
}

export default ReadCSVfile;
