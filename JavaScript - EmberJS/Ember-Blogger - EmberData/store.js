/**
 * Created by Daniel on 6/10/2015.
 */


//  Set up EMBER to use EMBER DATA with the Local Storage Adapter


Blogger.ApplicationSerializer = DS.LSSerializer.extend();
Blogger.ApplicationAdapter = DS.LSAdapter.extend();

