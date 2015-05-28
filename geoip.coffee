# GeoLite2 = new Mongo.Collection 'maxmind-geolite2'

geoip = new ReactiveDict(null)

rest = (ip, callback) ->
  url = "https://freegeoip.net/json/#{ip}"
  HTTP.get url, (err,resp) ->
    if (not err and resp.statusCode is 200) then callback JSON.parse(resp.content)

if Meteor.isClient
  headers.ready ->
    geoip.set 'headers', headers.get()
    geoip.set 'ip', headers.getClientIP()
    rest geoip.get('ip'), (location) -> geoip.set 'location', location

# Maxmind's database is updated on the first Tuesday of each month
# 'http://geolite.maxmind.com/download/geoip/database/GeoLite2-City-CSV.zip'
