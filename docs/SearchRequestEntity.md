# MastercardTrackSearchApi.SearchRequestEntity

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**annualInvoiceCount** | **String** | Annual number of invoices with Trading Partner. | [optional] 
**annualNumberOfTransactions** | **String** | Annual number of transactions with Trading Partner. | [optional] 
**annualTransactionAmount** | **String** | Annual spend/revenue with Trading Partner in the currency listed. | [optional] 
**businessAddress** | [**BusinessAddress**](BusinessAddress.md) |  | [optional] 
**businessName** | **String** | Entity Name to be queried. Alphanumeric characters allowed. | 
**currency** | **String** | 3 letter currency code used with Trading Partner. | [optional] 
**emailAddress** | **String** | Email Address of Entity to be queried. Alphanumeric characters allowed. | [optional] 
**organisationIdentifications** | [**[OrganisationIdentification]**](OrganisationIdentification.md) | Organisation identification for the Entity being queried. | [optional] 
**paymentMethod** | **String** | Payment rail used for payment. | [optional] 
**paymentTerms** | **String** | Payment terms with Trading Partner. | [optional] 
**phoneNumber** | **String** | Phone Number of Entity to be queried. Alphanumeric characters allowed as well as plus signs, spaces, parenthesis, hyphens, and periods. | [optional] 
**searchRequestId** | **String** | Every record must contain a request id as an identifier. Alphanumeric and hyphens are allowed. | 


