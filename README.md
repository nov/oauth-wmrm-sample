# Setup

## Pre-requirements

Expecting your Mac has ruby 2.0 or above.

```
# install bundler gem
gem install bundler

# install pow
curl get.pow.cx | sh

# clone repo & install required gems using bundler
git clone git@github.com:nov/oauth-wmrm-sample.git
cd oauth-wmrm-sample
bundle install
```

## Start OP & RP

### Simple Mode

```
cd ~/.pow
ln -s <path-to-wmrm-sample>/simple/op wmrm-op # for authenticated/unauthenticated window
ln -s <path-to-wmrm-sample>/simple/rp wmrm-rp # for main window
```

Then open http://wmrm-rp.dev

### Relay Mode

```
cd ~/.pow
ln -s <path-to-wmrm-sample>/relay/as wmrm-as # for authenticated/unauthenticated window
ln -s <path-to-wmrm-sample>/relay/rs wmrm-rs # for message target window
ln -s <path-to-wmrm-sample>/relay/rp wmrm-rp # for main window
```

Then open http://wmrm-rp.dev