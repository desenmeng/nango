import path from 'path';
import fs from 'fs';
import type { IntegrationTemplate } from './types.js';
import type { Integration } from './integration.model.js';
import db from './database.js';
import * as yaml from 'js-yaml';

class IntegrationsManager {
    getIntegrationTemplate(integrationType: string): IntegrationTemplate {
        const integrationPath = path.join(process.env['PIZZLY_INTEGRATIONS_FOLDER'] || '../../integrations', `${integrationType}.yaml`);
        return yaml.load(fs.readFileSync(integrationPath));
    }

    async getIntegrationConfig(integrationName: string): Promise<Integration | null> {
        let result = await db.knex.withSchema(db.schema()).select('*').from(`_pizzly_integrations`).where({ integration_id: integrationName });

        if (result == null || result.length == 0 || result[0] == null) {
            return null;
        }

        return {
            id: result[0].id,
            name: result[0].integration_id,
            type: result[0].type,
            oauth_client_id: result[0].oauth_client_id || undefined,
            oauth_client_secret: result[0].oauth_client_secret || undefined,
            oauth_scopes: result[0].oauth_scopes != null ? result[0].oauth_scopes.split(',') : undefined
        };
    }
}

export default new IntegrationsManager();