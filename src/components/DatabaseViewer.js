import React, { useState } from 'react';
import { DatabaseSchema, sampleSchemes } from '../database/schema';
import './DatabaseViewer.css';

const DatabaseViewer = () => {
  const [activeTab, setActiveTab] = useState('schema');
  const [selectedTable, setSelectedTable] = useState('users');

  const renderTableSchema = (tableName, schema) => (
    <div key={tableName} className="table-schema">
      <h4>{tableName.toUpperCase()}</h4>
      <div className="schema-fields">
        {Object.entries(schema).map(([field, type]) => (
          <div key={field} className="field-row">
            <span className="field-name">{field}</span>
            <span className="field-type">{type}</span>
          </div>
        ))}
      </div>
    </div>
  );

  const renderSampleData = (category, schemes) => (
    <div key={category} className="sample-category">
      <h4>{category.toUpperCase()} SCHEMES</h4>
      <div className="schemes-list">
        {schemes.map((scheme, index) => (
          <div key={index} className="scheme-item">
            <h5>{scheme.name}</h5>
            <p><strong>Description:</strong> {scheme.description}</p>
            <p><strong>Eligibility:</strong> {scheme.eligibilityCriteria}</p>
            <p><strong>Benefits:</strong> {scheme.benefits}</p>
            <p><strong>Documents:</strong> {scheme.documentsRequired}</p>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="database-viewer">
      <div className="db-header">
        <h2>Government Portal Database Design</h2>
        <div className="db-tabs">
          <button 
            className={activeTab === 'schema' ? 'active' : ''}
            onClick={() => setActiveTab('schema')}
          >
            Database Schema
          </button>
          <button 
            className={activeTab === 'data' ? 'active' : ''}
            onClick={() => setActiveTab('data')}
          >
            Sample Data
          </button>
          <button 
            className={activeTab === 'er' ? 'active' : ''}
            onClick={() => setActiveTab('er')}
          >
            ER Diagram
          </button>
        </div>
      </div>

      <div className="db-content">
        {activeTab === 'schema' && (
          <div className="schema-view">
            <div className="table-selector">
              <h3>Tables</h3>
              {Object.keys(DatabaseSchema).map(table => (
                <button
                  key={table}
                  className={selectedTable === table ? 'active' : ''}
                  onClick={() => setSelectedTable(table)}
                >
                  {table}
                </button>
              ))}
            </div>
            <div className="table-details">
              {renderTableSchema(selectedTable, DatabaseSchema[selectedTable])}
            </div>
          </div>
        )}

        {activeTab === 'data' && (
          <div className="data-view">
            {Object.entries(sampleSchemes).map(([category, schemes]) => 
              renderSampleData(category, schemes)
            )}
          </div>
        )}

        {activeTab === 'er' && (
          <div className="er-diagram">
            <h3>Entity Relationship Diagram</h3>
            <div className="er-content">
              <div className="entity-box">
                <h4>USERS</h4>
                <p>Central user table</p>
              </div>
              <div className="relationship-lines">
                <div className="entity-box">
                  <h4>STUDENTS</h4>
                  <p>1:1 with Users</p>
                </div>
                <div className="entity-box">
                  <h4>SENIOR_CITIZENS</h4>
                  <p>1:1 with Users</p>
                </div>
                <div className="entity-box">
                  <h4>WOMEN</h4>
                  <p>1:1 with Users</p>
                </div>
                <div className="entity-box">
                  <h4>FARMERS</h4>
                  <p>1:1 with Users</p>
                </div>
              </div>
              <div className="entity-box">
                <h4>APPLICATIONS</h4>
                <p>Many:1 with Users</p>
              </div>
              <div className="entity-box">
                <h4>SCHEMES</h4>
                <p>1:Many with Applications</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DatabaseViewer;