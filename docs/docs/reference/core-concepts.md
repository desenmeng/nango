# Core Concepts

A brief definition of the main items in Nango and how they related to each other.

[![Nango Core concepts](/img/nango-auth-core-concepts.png)](/img/nango-auth-core-concepts.png)

## OAuth Provider (aka API) {#providers}

Nango calls the APIs, e.g. GitHub, Google, Slack, Notion etc, OAuth Providers. You can find a [full list of the supported Providers here](/providers).

For each OAuth Provider Nango has one or more Provider Templates, e.g. `brex` and `brex-staging`, `google`, `slack` etc. These tell Nango how to run the OAuth flow for this provider.

Note that some OAuth Providers cover OAuth for multiple APIs: For instance, Google and Microsoft have one central OAuth service that gives you access tokens. These can be used for dozens of different APIs from these companies.

## Integrations & Config Keys {#integrations}

To run OAuth flows for you Nango needs a few details from your app:

-   The provider template to use, e.g. `github`, `notion` or `google`
-   Your app's `client_id` and `client_secret` (this is how the OAuth provider identifies your application)
-   The `scope`s you would like to use with the API

Nango calls this bundle an Integration. You add and manage them in [your dashboard](https://app.nango.dev/integrations).

### Integration Config Key {#configKey}

Each Integration in Nango is identified by a unique Config Key. You get to choose it.

You use this Config Key to tell Nango for which configuration the OAuth flow should run, or for which provider the access token should be retrieved (more on this below).

For most use cases we recommend you use the Provider Template name as the Config Key, e.g. `google`, `slack`, `salesforce` etc.

But in some situations you may have multiple integrations for the same provider: For instance one Google integration for accessing Google Calendar and one for accessing Google Drive. In this case you will need to pick unique names for each, e.g. `google-calendar` and `google-drive`.

## Connections and the Connection Id: How we store access tokens {#connections}

When you run an OAuth flow with Nango we securely store the returned OAuth credentials for you in Nango.

We call this a Connection, because it represents a link between a user of your app and the OAuth provider.

To identify this Connection, we ask you for a **Connection Id**: A unique identifier for this set of credentials.  
You tell us this Connection Id when you start the OAuth flow, and you later use the same Connection Id to retrieve the current access token, metadata or other information about this set of OAuth credentials from Nango.

### Picking a good Connection Id {#connectionId}

The pair of `<Config Key, Connection Id>` needs to be unique in your Nango instance. This means you can use the same Connection Id across different Integrations (e.g. use Connection Id `1` with a `google` and a `github` config).

We recommend you use the User ID, Account ID or similar unique identifier for the Connection Id.

The only exception is if you expect a user to setup multiple connections with the same Integration: For instance, if your app lets a user connect multiple Google Calendar accounts or multiple Slack workspaces. In this case you will need to pick a different value for the Connection Id, so it is unique again.

### Connection Metadata (and raw token responses) {#metadata}

Besides the access token and refresh tokens Nango also stores a few other things for you:

-   Metadata, which the OAuth provider returns during the OAuth flow (e.g. a company ID, tenant ID, instance URL or similar)
-   The raw token response from the API, which sometimes can be helpful to get additional metadata

You can find details about the structured metadata that Nango stores for each provider on their [provider documentation page](/providers).
